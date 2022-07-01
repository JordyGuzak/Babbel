import { ApiError, Session, SupabaseClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import User from "../models/user";

interface IAuthContext {
  user?: User | null
  session?: Session | null
  signIn(email: string, password: string): Promise<{
    user?: User | null
    error?: ApiError | null
  }>
  signOut: Function
}

interface IAuthProviderProps {
  supabase: SupabaseClient,
  children: JSX.Element
}

export const AuthContext = createContext<IAuthContext>({});

export const AuthProvider = ({ supabase, children }: IAuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter()

  useEffect(() => {
    const activeSession = supabase.auth.session()
    setSession(activeSession)
    setUser(activeSession?.user ?? null)

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession)
      setUser(currentSession?.user ?? null)
      await fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session: currentSession }),
      })

      switch (event) {
        case 'SIGNED_IN':
          router.push('/')
          break
        case 'SIGNED_OUT':
          router.push('/signin')
          break
      }
    })

    return () => {
      authListener?.unsubscribe()
    }
  }, [])


  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signIn: (email, password) => supabase.auth.signIn({ email: email, password: password }),
        signOut: () => supabase.auth.signOut(),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
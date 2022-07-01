import '../styles/global.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/auth'
import { supabase } from '../utils/subabase-client'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider supabase={supabase}>
      <div className='theme-container background'>
            <Component {...pageProps} />
      </div>
    </AuthProvider>
  )
}

export default App

import React, { FormEventHandler, useState } from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import classNames from "classnames";

import { Button, Input, Text } from 'components'
import styles from 'styles/login.module.css'
import { useAuth } from "hooks/auth";
import { supabase } from "utils/subabase-client";

export default function SignIn({ }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const { signIn } = useAuth();

    const formSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        event.stopPropagation()
        submit()
    }

    const submitButtonClick: React.MouseEventHandler<HTMLDivElement> = _ => {
        submit()
    }

    const submit = async () => {
        if (!email) {
            setError('Please enter your email')
            return
        }

        if (!password) {
            setError('Please enter your password')
            return
        }

        setError(null)

        const { error } = await signIn(email, password)

        if (error) {
            setError(error.message)
        }
    }

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={formSubmit}>
                <h1 className={styles.header}>Sign in</h1>
                <div className={styles.errorContainer}>
                    <Text className={styles.error} style={{ visibility: error ? 'visible' : 'hidden' }}>{error}</Text>
                </div>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.field}
                    placeholder="Email"
                    autoComplete="email"
                    onChange={(evt) => setEmail(evt.target.value)}
                    required
                />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    className={styles.field}
                    placeholder="Password"
                    onChange={(evt) => setPassword(evt.target.value)}
                    required
                />

                <button type="submit" style={{ display: 'none' }} />
                <Button className={classNames(styles.formButton, styles.submit, 'primary')} onClick={submitButtonClick}><Text>Sign in</Text></Button>
                <Button className={classNames(styles.formButton, styles.forgot, 'surface')} onClick={_ => alert('Not implemented yet.')}><Text>Forgot password</Text></Button>
                <div className={styles.forgotPassword}>No account yet? <Link href="/signup"><a className={styles.link}>Sign up</a></Link></div>
            </form>
        </div>
    )
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
    const { user } = await supabase.auth.api.getUserByCookie(req, res)

    if (user) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
            props: {
                user: user
            }
        }
    }

    return {
        props: {
            user: null
        }
    }
}

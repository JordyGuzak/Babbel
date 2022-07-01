import classNames from "classnames";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Text from "../components/text";
import { useAuth } from "../context/auth";
import styles from '../styles/login.module.css'
import { supabase } from "../utils/subabase-client";

export default function SignIn({ }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
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
            console.log('Please enter your email')
            return
        }

        if (!password) {
            console.log('Please enter your password')
            return
        }

        const { error } = await signIn(email, password)

        if (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.main}>
            <form className={styles.form} onSubmit={formSubmit}>
                <h1 className={styles.header}>Sign in</h1>
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

                <button type="submit" style={{display: 'none'}}/>
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
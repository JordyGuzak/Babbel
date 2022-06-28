import classNames from "classnames";
import type { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Text from "../components/text";
import { withSessionSsr } from "../lib/session";
import styles from '../styles/login.module.css'
import { supabase } from "../utils/subabase-client";

export default function SignIn({ response }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    
    console.log(response)
    const router = useRouter()
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    const formSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        signIn()
    }

    const signIn = async () => {
        const res = await fetch(`/api/signin`, {
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        if (res.ok) {
            router.push(`/`)
        } else {
            console.log(res.statusText)
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

                <Button className={classNames(styles.formButton, styles.submit, 'primary')} onClick={_ => signIn()}><Text>Sign in</Text></Button>
                <Button className={classNames(styles.formButton, styles.forgot, 'surface')} onClick={_ => alert('Not implemented yet.')}><Text>Forgot password</Text></Button>
                <div className={styles.forgotPassword}>No account yet? <Link href="/signup"><a className={styles.link}>Sign up</a></Link></div>
            </form>
        </div>
    )
}

export const getServerSideProps = withSessionSsr(
    async function getServersideProps({ req, res }) {
        const session = await supabase.auth.api.getUserByCookie(req, res);

        const response = { 
            user: session.user,
            token: session.token,
            error: session.error?.message
         }

        if (session.user) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
                props: {
                    response: response
                }
            }
        }

        return {
            props: {
                response: response
            }
        }
    }
)
import classNames from "classnames";
import type { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import { withSessionSsr } from "../lib/session";
import styles from '../styles/login.module.css'

export default function SignIn({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
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

        const response = await res.json();

        if (response.message) {
            console.log(response.message)
        }

        if (response.user) router.push(`/`);
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
                <Button className={classNames(styles.submit, styles.field, 'primary')} onClick={_ => signIn()}>Sign in</Button>
            </form>
        </div>
    )
}

export const getServerSideProps = withSessionSsr(
    async function getServersideProps({ req, res }) {
        const { user } = req.session;

        if (user) {
            res.setHeader("location", "/")
            res.statusCode = 302
            res.end()
            return {
                props: {
                    user: user
                }
            }
        }

        return {
            props: {
                user: {}
            }
        }
    }
)
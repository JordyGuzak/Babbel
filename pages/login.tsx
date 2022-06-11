import classNames from "classnames";
import type { InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import Button from "../components/button";
import { withSessionSsr } from "../lib/session";
import styles from '../styles/login.module.css'

export default function login({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    const formSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        signIn()
    }

    const signIn = async () => {
        const res = await fetch(`/api/login`, {
            body: JSON.stringify({
                username: email,
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
                <h2>Log in</h2>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(evt) => setEmail(evt.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(evt) => setPassword(evt.target.value)}
                    required
                />
                <Button className={classNames(styles.submit, 'primary')} onClick={_ => signIn()}>Login</Button>
                <Link href='/register'><a>Register</a></Link>
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
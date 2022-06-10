import classNames from "classnames";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import Button from "../components/button";
import styles from '../styles/register.module.css'

const Login: NextPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    const formSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        registerUser()
    }

    const registerUser = async () => {
        const res = await fetch(`/api/register`, {
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
                <h2>Register</h2>
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
                <Button className={classNames(styles.submit, 'primary')} onClick={evt => registerUser()}>Register</Button>
            </form>
        </div>

    )
}

export default Login;
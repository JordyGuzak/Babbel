import classNames from "classnames";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import styles from '../styles/register.module.css'

const SignUp: NextPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)

    const formSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        registerUser()
    }

    const registerUser = async () => {
        const res = await fetch(`/api/signup`, {
            body: JSON.stringify({
                username: username,
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
                <h1 className={styles.header}>Sign up</h1>
                <Input
                    id="username"
                    name="username"
                    className={styles.field}
                    placeholder="Username"
                    autoComplete="none"
                    onChange={(evt) => setUsername(evt.target.value)}
                    required
                />

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
                <Button className={classNames(styles.submit, styles.field, 'primary')} onClick={evt => registerUser()}>Sign up</Button>
            </form>
        </div>
    )
}

export default SignUp;
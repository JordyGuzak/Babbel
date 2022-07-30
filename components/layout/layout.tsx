import Head from 'next/head'
import styles from 'components/layout/layout.module.css'

interface LayoutProps {
    children?: JSX.Element | JSX.Element[] | string
}

export default function Layout({ children }: LayoutProps) {

    return (
        <div>
            <Head>
                <title>Babbel</title>
                <meta name="description" content="Babbel social media app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <nav></nav>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    )
}
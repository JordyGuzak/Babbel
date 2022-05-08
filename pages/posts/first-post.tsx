import Head from "next/head";
import Link from "next/link";

export default function firstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/"><a>Home</a></Link>
            </h2>
        </>
    );
}
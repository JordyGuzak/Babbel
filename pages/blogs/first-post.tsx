import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const content = `
# Cats are funny

## Exhibit A: 
![Stupid cat](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2%2F9ebdz.jpg&f=1&nofb=1 "Stupid cat")
`

export default function firstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <ReactMarkdown children={content}></ReactMarkdown>
            <Link href="/"><a>Back</a></Link>
        </>
    );
}
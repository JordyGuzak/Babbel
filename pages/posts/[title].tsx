import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import ReactMarkdown from "react-markdown";
import useSWR, { Fetcher } from 'swr'
import Surface from "../../components/surface";
import Post from "../../models/post";
import styles from "../../styles/post.module.css"

export default function BlogPage() {

    const fetcher: Fetcher<Post> = (url: string) => fetch(url).then(res => res.json())
    const router = useRouter();
    const { title } = router.query;
    const { data } = useSWR<Post>(`/api/posts/${title}`, fetcher)

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <main className={styles.main}>
                <Surface className={styles.post} elevation="medium">
                    <ReactMarkdown children={data.content}></ReactMarkdown>
                </Surface>
            </main>
        </>
    );
}
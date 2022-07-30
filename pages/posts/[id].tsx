import Head from "next/head";
import { useRouter } from 'next/router';
import ReactMarkdown from "react-markdown";
import useSWR, { Fetcher } from 'swr'

import Post from "models/post";
import styles from "styles/post.module.css"
import Layout from "components/layout"
import ProfilePicture from "components/profile-picture"
import Surface from "components/surface";
import Text from "components/text";

export default function BlogPage() {

    const fetcher: Fetcher<Post> = (url: string) => fetch(url).then(res => res.json())
    const router = useRouter();
    const { id: id } = router.query;
    const { data } = useSWR<Post>(`/api/posts/${id}`, fetcher)

    if (!data)
        return <></>

    return (
        <Layout>
            <Head>
                <title>{data?.content}</title>
            </Head>
            <main className={styles.main}>
                <Surface className={styles.post} elevation="medium">
                    <div className={styles.userInfo}>
                        <ProfilePicture />
                        <Text emphasis='medium' className={styles.username}>{data.username}</Text>
                    </div>
                    <ReactMarkdown>{data?.content || ''}</ReactMarkdown>
                </Surface>
            </main>
        </Layout>
    );
}

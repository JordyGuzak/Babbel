import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import useSWR, { Fetcher } from 'swr'
import Post from "../../models/post";

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function BlogPage() {

    const fetcher: Fetcher<Post> = (url: string) => fetch(url).then(res => res.json())
    const router = useRouter();
    const { title } = router.query;
    const { data } = useSWR<Post>(`/api/blogs/${title}`, fetcher)

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Main>
                <ReactMarkdown children={data.content}></ReactMarkdown>
                <Link href="/"><a>Back</a></Link>
            </Main>
        </>
    );
}
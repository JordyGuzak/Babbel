import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router';
import ReactMarkdown from "react-markdown";
import useSWR, { Fetcher } from 'swr'
import Blog from "../../models/blog";


export default function BlogPage() {
    
    const fetcher: Fetcher<Blog> = (url: string) => fetch(url).then(res => res.json())
    const router = useRouter();
    const { title } = router.query;
    console.log(title)
    const { data } = useSWR<Blog>(`/api/blogs/${title}`, fetcher)

    if (!data)
    {
        return <p>Loading...</p>
    }

    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <ReactMarkdown children={data.content}></ReactMarkdown>
            <Link href="/"><a>Back</a></Link>
        </>
    );
}
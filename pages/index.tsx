import type { NextPage } from 'next'
import Head from 'next/head'
import useSWR, { Fetcher } from 'swr'
import Timeline from '../components/timeline'
import TimelineItem from '../components/timeline-item'
import Post from '../models/post'
import styles from '../styles/home.module.css'

const Home: NextPage = () => {

  const fetcher: Fetcher<Post[]> = (url: string) => fetch(url).then(res => res.json());

  const { data } = useSWR<Post[]>('api/posts', fetcher)

  if (!data) {
    return null
  }

  return (
    <div>
      <Head>
        <title>Author.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>      
        <Timeline className={styles.timeline}>
          {data.map(post => {
            return <TimelineItem key={post.id} post={post}/>
          })}
        </Timeline>
      </main>
    </div>
  )
}

export default Home

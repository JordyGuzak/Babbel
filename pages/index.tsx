import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import  useSWR, { Fetcher } from 'swr'
import Blog from '../models/blog'

const Home: NextPage = () => {

  const fetcher: Fetcher<Blog[]> = (url: string) => fetch(url).then(res => res.json());

  const {data} = useSWR<Blog[]>('api/blogs', fetcher)

  if (!data)
  {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Author.io</span>
        </h1>
        <button>Get started</button>
      </main>
    </div>
  )
}

export default Home

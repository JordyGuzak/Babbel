import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR, { Fetcher } from 'swr'
import Compose from '../components/compose'
import Layout from '../components/layout'
import NavBar from '../components/navbar'
import Timeline from '../components/timeline'
import TimelineItem from '../components/timeline-item'
import useScroll from '../hooks/useScroll'
import { withSessionSsr } from '../lib/session'
import Post from '../models/post'
import styles from '../styles/index.module.css'

export default function Home( {user} : InferGetServerSidePropsType<typeof getServerSideProps>) {

  const fetcher: Fetcher<Post[]> = (url: string) => fetch(url).then(res => res.json())
  const { data } = useSWR<Post[]>('api/posts', fetcher)
  const [navClassList, setNavClassList] = useState<string[]>([])
  const scroll = useScroll()

  useEffect(() => {
    const classList: Array<string> = [];

    if (scroll.y > 56 && scroll.y - scroll.previousY >= 0)
      classList.push(styles.navbarHidden);

  setNavClassList(classList);

  }, [scroll.y])
  
  if (!data) {
    return null
  }

  return (
    <Layout>
      <NavBar className={navClassList.join(' ')} user={user}/>
      <div className={styles.container}>
        <div className={styles.left}>
        </div>
        <div className={styles.center}>
          {user ? <Compose className={styles.compose} user={user} /> : null}
          <Timeline className={styles.timeline}>
            {data.map(post => {
              return (<Link key={post.id} href={`/posts/${post.id}`}>
                <a>
                  <TimelineItem className={styles.timelineItem} post={post} />
                </a>
              </Link>)
            })}
          </Timeline>
        </div>
        <div className={styles.right}>

        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    return {
      props: {
        user: req.session.user
      }
    }
  }
)
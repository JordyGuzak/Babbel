import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import useSWR, { Fetcher } from 'swr'
import Compose from '../components/compose'
import Layout from '../components/layout'
import Timeline from '../components/timeline'
import TimelineItem from '../components/timeline-item'
import { withSessionSsr } from '../lib/session'
import Post from '../models/post'
import styles from '../styles/index.module.css'

export default function Home( {user} : InferGetServerSidePropsType<typeof getServerSideProps>) {

  const fetcher: Fetcher<Post[]> = (url: string) => fetch(url).then(res => res.json());

  const { data } = useSWR<Post[]>('api/posts', fetcher)

  if (!data) {
    return null
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
        </div>
        <div className={styles.center}>
          {user ?  <Compose className={styles.compose} /> : null}
          <Timeline className={styles.timeline}>
            {data.map(post => {
              return (<Link key={post.id} href={`/posts/${post.title}`}>
                <a>
                  <TimelineItem post={post} />
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
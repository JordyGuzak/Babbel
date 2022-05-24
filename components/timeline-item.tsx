import Post from "../models/post"
import styles from "../styles/timeline-item.module.css"
import { FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa'
import moment from 'moment'
import Surface from "./surface"

interface TimelineItemProps {
    post: Post
}

export default function TimelineItem({ post }: TimelineItemProps) {
    return (
        <Surface className={styles['timeline-item']}>
            <div className="row">
                <div className="column">
                    <Surface elevation="low" color="on-surface" className={styles["profile-picture"]}>
                        <div className={styles["profile-picture--head"]}/>
                        <div className={styles["profile-picture--body"]}/>
                    </Surface>
                </div>
                <div className="column grow">
                    <div className={styles["author-container"]}>
                        <div className={styles.author}>{post.author.name}</div>
                        <div className={styles.date}>{moment(post.modifiedAt).format('ll')}</div>
                    </div>
                    <h4 className={styles.title}>{post.title}</h4>
                    <div className={styles.stats}>
                        <div className={styles.comments}><FaRegComment /> {post.comments}</div>
                        <div className={styles.likes}><FaRegHeart /> {post.likes}</div>
                        <div className={styles.shared}><FaRegPaperPlane /> {post.shared}</div>
                    </div>
                </div>
            </div>
        </Surface>
    )
}
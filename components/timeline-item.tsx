import Post from "../models/post"
import styles from "../styles/timeline-item.module.css"
import { FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa'
import moment from 'moment'
import Overlay from "./overlay"

interface TimelineItemProps {
    post: Post
}

export default function TimelineItem({post}: TimelineItemProps) {
    return (
        <div className={styles['timeline-item']}>
            <h3>{post.title}</h3>
            <div className={styles.author}>{post.author.name}</div>
            <div className={styles.date}>{moment(post.modifiedAt).format('ll')}</div>
            <div className={styles.stats}>
                <div className={styles.stats__item}><FaRegComment/> {post.comments}</div>
                <div className={styles.likes}><FaRegHeart/> {post.likes}</div>
                <div className={styles.stats__item}><FaRegPaperPlane/> {post.shared}</div>
            </div>
            <div className={styles.overlay}/>
        </div>
    )
}
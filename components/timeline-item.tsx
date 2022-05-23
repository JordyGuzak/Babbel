import Post from "../models/post"
import styles from "../styles/timeline-item.module.css"
import { FaRegComment, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa'
import moment from 'moment'
import Elevation from "./elevation"

interface TimelineItemProps {
    post: Post
}

export default function TimelineItem({post}: TimelineItemProps) {
    return (
        <div className={styles['timeline-item'] + " surface"}>
            <Elevation level='low'/>
            <div className={styles["author-container"]}>
                <div className={styles.author}>{post.author.name}</div>
                <div className={styles.date}>{moment(post.modifiedAt).format('ll')}</div>
            </div>
            <h4 className={styles.title}>{post.title}</h4>
            <div className={styles.stats}>
                <div className={styles.stats__item}><FaRegComment/> {post.comments}</div>
                <div className={styles.likes}><FaRegHeart/> {post.likes}</div>
                <div className={styles.stats__item}><FaRegPaperPlane/> {post.shared}</div>
            </div>
            <div className={styles.overlay}/>
        </div>
    )
}
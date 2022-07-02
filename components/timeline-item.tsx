import Post from "../models/post"
import styles from "../styles/timeline-item.module.css"
import moment from 'moment'
import Surface from "./surface"
import { FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import classNames from "classnames"

interface TimelineItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    post: Post
}

const getDateString = (date: Date): string => {
    const now = new Date()
    date = new Date(date);

    const diff = now.getTime() - date.getTime()
    const diffInDays = diff / (1000 * 60 * 60 * 24);  

    return diffInDays >= 1 ? moment(date).format('ll') : moment(date).fromNow()
}

export default function TimelineItem({post, className, ...props}: TimelineItemProps) {

    const commentsClickEventHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
    }

    const likesClickEventHandler: React.MouseEventHandler<HTMLDivElement> = async (e) => {
        e.preventDefault();
    
        const response = await fetch(`api/like/${post.id}`)
        console.log(response)
    }

    return (
            <Surface className={classNames(styles['timeline-item'], className)} elevation="low" selectable {...props} color="surface">
                <div className="row">
                    <div className="column">
                        <Surface elevation="low" color="on-surface" className={styles["profile-picture"]}>
                            <div className={styles["profile-picture--head"]} />
                            <div className={styles["profile-picture--body"]} />
                        </Surface>
                    </div>
                    <div className="column grow">
                        <div className={styles["author-container"]}>
                            <div className={styles.author}>{post.username}</div>
                            <div className={styles.date}>{getDateString(post.created_at)}</div>
                        </div>
                        <div className={styles.content}>{post.content}</div>
                        <div className={styles.stats}>
                            <div className={styles.comments} onClick={commentsClickEventHandler} ><FaRegComment /> {post.comments_count | 0}</div>
                            <div className={classNames(styles.likes, {selected: post.liked_by_me})} onClick={likesClickEventHandler} ><FaRegHeart /> {post.likes_count | 0}</div>
                            <div className={styles.shared}><FaRetweet /> {post.shared_count | 0}</div>
                        </div>
                    </div>
                </div>
            </Surface>
    )
}
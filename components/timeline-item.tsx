import Post from "../models/post"
import styles from "../styles/timeline-item.module.css"
import moment from 'moment'
import Surface from "./surface"
import { FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import classNames from "classnames"

interface TimelineItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    post: Post
}

const commentsClickEventHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
}

export default function TimelineItem({post, className, ...props}: TimelineItemProps) {
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
                            <div className={styles.author}>{post.user?.profile?.username}</div>
                            <div className={styles.date}>{moment(post.modified_at).format('ll')}</div>
                        </div>
                        <p className={styles.title}>{post.content}</p>
                        <div className={styles.stats}>
                            <div onClick={commentsClickEventHandler} className={styles.comments}><FaRegComment /> {post.comments_count}</div>
                            <div className={styles.likes}><FaRegHeart /> {post.likes_count}</div>
                            <div className={styles.shared}><FaRetweet /> {post.shared_count}</div>
                        </div>
                    </div>
                </div>
            </Surface>
    )
}
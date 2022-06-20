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
                            <div className={styles.author}>{post.author.name}</div>
                            <div className={styles.date}>{moment(post.modifiedAt).format('ll')}</div>
                        </div>
                        <h3 className={styles.title}>{post.title}</h3>
                        <div className={styles.stats}>
                            <div onClick={commentsClickEventHandler} className={styles.comments}><FaRegComment /> {post.comments}</div>
                            <div className={styles.likes}><FaRegHeart /> {post.likes}</div>
                            <div className={styles.shared}><FaRetweet /> {post.shared}</div>
                        </div>
                    </div>
                </div>
            </Surface>
    )
}
import React, { useRef } from "react";
import { FaPollH, FaRegImage, FaRegPaperPlane, FaRegSmile } from "react-icons/fa";
import { MdGif } from "react-icons/md"
import classNames from "classnames";

import styles from "components/compose/compose.module.css";
import Surface from "components/surface";
import Button from "components/button";
import Post from "models/post";

interface ComposeProps {
    className?: string | undefined,
    onPost?(post: Post): void
}

export default function Compose({ className, onPost }: ComposeProps) {

    const textareaRef = useRef<HTMLDivElement>(null)
    const placeholderRef = useRef<HTMLSpanElement>(null)

    const onTextAreaValueChange = () => {
        if (!placeholderRef.current || !textareaRef.current) return;
        placeholderRef.current.style.display = textareaRef.current.innerText.length > 0 ? "none" : "block";
    }

    const sendPostRequest = async (): Promise<Post | null> => {
        const posts: Post[] = await fetch(`/api/posts`, {
            body: JSON.stringify({
                content: textareaRef.current?.innerText,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then(res => res.json()) ?? []

        return posts.length > 0 ? posts[0] : null
    }

    const post = async () => {
        const post = await sendPostRequest()

        if (post) {
            onPost?.(post)
        }

        if (textareaRef.current) {
            textareaRef.current.innerText = ''
            onTextAreaValueChange()
        }
    }

    return (
        <Surface className={classNames(styles.compose, className)} color="surface" elevation="medium" selectable>
            <span className={styles.placeholder} ref={placeholderRef} >What&apos;s up?</span>
            <div className={styles.textarea} contentEditable onInput={onTextAreaValueChange} ref={textareaRef} />
            <div className={styles.controls}>
                <div className={styles.options}>
                    <Button className={styles.button}><FaRegImage title="image"/></Button>
                    <Button className={styles.button}><FaRegSmile title="emoji"/></Button>
                    <Button className={styles.button}><FaPollH title="poll"/></Button>
                    <Button className={styles.button}><MdGif title="gif"/></Button>
                </div>
                <Button className={classNames(styles.post, 'primary')} overlayClassName={styles["post-overlay"]} onClick={_ => post()}><FaRegPaperPlane title="send" /></Button>
            </div>
        </Surface>
    )
}

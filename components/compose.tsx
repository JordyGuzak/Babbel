import Surface from "./surface";
import styles from "../styles/compose.module.css";
import React, { useRef } from "react";
import Button from "./button";
import { FaPollH, FaRegImage, FaRegPaperPlane, FaRegSmile } from "react-icons/fa";
import { MdGif } from "react-icons/md"
import classNames from "classnames";

interface ComposeProps {
    className?: string | undefined
}

export default function Compose({ className }: ComposeProps) {

    const textareaRef = useRef<HTMLDivElement>(null)
    const placeholderRef = useRef<HTMLSpanElement>(null)
    
    const onTextAreaValueChange = () => {
        if (!placeholderRef.current || !textareaRef.current) return;
        placeholderRef.current.style.display = textareaRef.current.innerText.length > 0 ? "none" : "block";
    }

    return (
        <Surface className={classNames(styles.compose, className)} color="surface" elevation="medium" selectable>
            <span className={styles.placeholder} ref={placeholderRef} >What&apos;s up?</span>
            <div className={styles.textarea} contentEditable onInput={onTextAreaValueChange} ref={textareaRef} />
            <div className={styles.controls}>
                <div className={styles.options}>
                    <Button className={styles.button}><FaRegImage title="image" /></Button>
                    <Button className={styles.button}><FaRegSmile title="emoji" /></Button>
                    <Button className={styles.button}><FaPollH title="poll" /></Button>
                    <Button className={styles.button}><MdGif title="gif" /></Button>
                </div>
                <Button className={styles.post} overlayClassName={styles["post-overlay"]}><FaRegPaperPlane title="send" /></Button>
            </div>
        </Surface>
    )
}
import React from "react";
import { ThemeColor } from "../constants/theme";
import styles from "../styles/button.module.css"


export interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string,
    color?: ThemeColor | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Button({children, color, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={color}>
            <div className={styles.elevation}></div>
            {children}
            <div className={styles.overlay}></div>
        </button>
    )
}


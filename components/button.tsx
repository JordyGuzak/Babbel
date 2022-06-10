import classNames from "classnames";
import React from "react";
import styles from "../styles/button.module.css"
import Surface from "./surface";


export interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string | undefined,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
    className?: string | undefined,
    overlayClassName?: string | undefined,
    disabled?: boolean,
    type?: string
}

export default function Button({ children, onClick, className, overlayClassName }: ButtonProps) {
    return (
        <Surface className={classNames(styles.button, className)} overlayClassName={classNames(styles.overlay, overlayClassName)} onClick={onClick} selectable>
            {children}
        </Surface>
    )
}


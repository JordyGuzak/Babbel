import styles from './button.module.css'

export enum Elevation {
    dp0 = 'dp0',
    dp1 = 'dp1'
}

interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string,
    className?: string,
    color?: string,
    elevation?: Elevation,
}

const getElevationStyleClass = (elevation: Elevation | undefined) => {
    switch (elevation) {
        case Elevation.dp0:
            return styles.dp0;
        case Elevation.dp1:
            return styles.dp1;
        default:
            return styles.dp0;
    }
}

export default function Button({
    children,
    color,
    className,
    elevation }: ButtonProps) {
    return (
        <button className={`${styles.button} ${color} ${getElevationStyleClass(elevation)} ${className || ''}`}>
            <div className='elevation'></div>
            <div className={styles.overlay}></div>
            {children}
        </button>
    )
}
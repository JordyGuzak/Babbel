import { ThemeColor } from "../constants/theme"
import Elevation from "./elevation"
import Overlay from "./overlay"
import styles from '../styles/surface.module.css'
import classNames from 'classnames'

interface SurfaceProps {
    children?: JSX.Element | JSX.Element[] | string
    elevation?: 'low' | 'medium' | 'high',
    color?: ThemeColor,
    className?: string | undefined,
    elevationClassName?: string | undefined,
    overlayClassName?: string | undefined
    selectable?: boolean
}

export default function Surface({ children, elevation, color, className, elevationClassName, overlayClassName, selectable}: SurfaceProps) {
    return (
        <div className={classNames(styles.surface, color, selectable ? styles.selectable : undefined, className)}>
            <Elevation className={elevationClassName} level={elevation} />
            {children}
            <Overlay className={classNames(styles.overlay, overlayClassName)} />
        </div>
    )
}
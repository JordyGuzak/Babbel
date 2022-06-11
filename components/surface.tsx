import { ThemeColor } from "../types/theme"
import Elevation from "./elevation"
import Overlay from "./overlay"
import styles from '../styles/surface.module.css'
import classNames from 'classnames'
import ElevationLevel from "../types/elevation-level"

interface SurfaceProps {
    children?: JSX.Element | JSX.Element[] | string
    elevation?: ElevationLevel,
    color?: ThemeColor,
    className?: string | undefined,
    elevationClassName?: string | undefined,
    overlayClassName?: string | undefined
    selectable?: boolean,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
}

export default function Surface({ children, elevation, color, className, elevationClassName, overlayClassName, selectable, onClick}: SurfaceProps) {
    return (
        <div className={classNames(styles.surface, color, selectable ? styles.selectable : undefined, className)} onClick={onClick}>
            <Elevation className={elevationClassName} level={elevation} />
            {children}
            <Overlay className={classNames(styles.overlay, overlayClassName)} />
        </div>
    )
}
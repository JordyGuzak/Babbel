import { ThemeColor } from "../constants/theme"
import Elevation from "./elevation"
import Overlay from "./overlay"
import styles from '../styles/surface.module.css'

interface SurfaceProps {
    children?: JSX.Element | JSX.Element[] | string
    elevation?: 'low' | 'medium' | 'high',
    color?: ThemeColor,
    className?: string | undefined
}

export default function Surface({ children, elevation, color, className }: SurfaceProps) {
    return (
        <div className={`${styles.surface} ${color || 'surface'} ${className}`}>
            <Elevation level={elevation || 'low'} />
            {children}
            <Overlay />
        </div>
    )
}
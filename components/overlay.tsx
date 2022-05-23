import { ThemeColor } from '../constants/theme'
import styles from '../styles/overlay.module.css'

interface OverlayProps {
    color: ThemeColor
}

export default function Overlay({color} : OverlayProps) {
    return <div className={styles.overlay}></div>
}
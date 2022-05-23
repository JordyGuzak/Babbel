import styles from '../styles/elevation.module.css'

interface ElevationProps {
    level: 'low' | 'medium' | 'high'
}

export default function Elevation({level}: ElevationProps) {
    return <div className={styles.elevation + " " + level} />
}
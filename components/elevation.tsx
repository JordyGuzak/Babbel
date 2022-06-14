import styles from '../styles/elevation.module.css'
import classNames from 'classnames'
import ElevationLevel from '../types/elevation-level';

interface ElevationProps {
    level?: ElevationLevel,
    className?: string | undefined
}

const getElevation = (level: ElevationLevel): number => {
    switch (level) {
        case 'low':
            return 0.03;
        case 'medium':
            return 0.05;
        case 'high':
            return 0.08;
        default:
            return 0;
    }
}

export default function Elevation({level, className}: ElevationProps) {
    return <div className={classNames(styles.elevation, className)} style={{opacity: getElevation(level)}} />
}
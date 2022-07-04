import styles from '../styles/elevation.module.css'
import classNames from 'classnames'
import ElevationLevel from '../types/elevation-level';

interface ElevationProps {
    level?: ElevationLevel,
    className?: string | undefined
}

export default function Elevation({level, className}: ElevationProps) {
    return <div className={classNames(styles.elevation, className,  { 
        'low': level == 'low',
        'medium': level == 'medium',
        'high': level == 'high',
    })}/>
}
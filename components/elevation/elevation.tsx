import classNames from 'classnames'

import styles from 'components/elevation/elevation.module.css'
import ElevationLevel from 'types/elevation-level';

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
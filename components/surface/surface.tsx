import classNames from 'classnames'

import styles from 'components/surface/surface.module.css'
import Elevation from "components/elevation"
import Overlay from "components/overlay/overlay"
import ElevationLevel from "types/elevation-level"
import { ThemeColor } from "types/theme"

interface SurfaceProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    elevation?: ElevationLevel,
    color?: ThemeColor,
    elevationClassName?: string | undefined,
    overlayClassName?: string | undefined
    selectable?: boolean,
}

export default function Surface({ children, elevation, color, className, elevationClassName, overlayClassName, selectable, onClick, ...props}: SurfaceProps) {
    return (
        <div className={classNames(styles.surface, color, selectable ? styles.selectable : undefined, className)} onClick={onClick} {...props}>
            <Elevation className={elevationClassName} level={elevation} />
            {children}
            <Overlay className={classNames(styles.overlay, overlayClassName)} />
        </div>
    )
}
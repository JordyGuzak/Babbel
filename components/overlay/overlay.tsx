import classNames from 'classnames'
import styles from 'components/overlay/overlay.module.css'

interface OverlayProps {
    className?: string | undefined
}

export default function Overlay({className} : OverlayProps) {
    return <div className={classNames(styles.overlay, className)}></div>
}
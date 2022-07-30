import styles from 'components/timeline/timeline.module.css'

interface TimelineProps {
    children?: JSX.Element | JSX.Element[] | string,
    className?: string | undefined
}

export default function Timeline({ children, className }: TimelineProps) {

    return (
        <div className={`${className} ${styles.timeline}`}>
            {children}
        </div>
    )
}
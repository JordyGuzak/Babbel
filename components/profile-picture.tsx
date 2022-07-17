import Surface from '../components/surface'
import styles from '../styles/profile-picture.module.css'

interface IProfilePictureProps {
    width?: string,
    height?: string
}

export default function ProfilePicture({ width, height }: IProfilePictureProps) {
    return (
        <Surface elevation="low" color="on-surface" className={styles.profilePicture}>
            <div className={styles.head} />
            <div className={styles.body} />
        </Surface>
    )
}

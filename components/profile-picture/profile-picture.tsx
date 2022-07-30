import styles from 'components/profile-picture/profile-picture.module.css'
import Surface from 'components/surface/surface'

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

import User from '../models/user'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import  {useRouter } from 'next/router'

interface INavBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    user?: User | null |undefined
}

export default function NavBar({ user, ...props }: INavBarProps) {

    const router = useRouter()
    
    const logout = async () => {
        const response = await fetch('/api/signout')

        if (response.status == 200) {
            router.push('/signin');
        }
    }

    return (
        <nav className={styles.nav} {...props}>
            <div className={styles.brand}><span>Babbel</span></div>
            <div className={styles.controls}>
                {user ?
                    (<a onClick={_ => logout()}>Sign out</a>) :
                    (<Link href="/signin"><a>Sign in</a></Link>)
                }
            </div>
        </nav>
    )
}
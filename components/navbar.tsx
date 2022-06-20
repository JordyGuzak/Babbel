import User from '../models/user'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import  {useRouter } from 'next/router'
import classNames from 'classnames'
import Text from './text'

interface INavBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    user?: User | null |undefined
}

export default function NavBar({user, className, ...props }: INavBarProps) {

    const router = useRouter()
    
    const logout = async () => {
        const response = await fetch('/api/signout')

        if (response.status == 200) {
            router.push('/signin');
        }
    }

    return (
        <nav className={classNames(styles.nav, className)} {...props}>
            <div className={styles.brand}><span>Babbel</span></div>
            <div className={styles.controls}>
                {user ?
                    (<a onClick={_ => logout()}><Text>Sign out</Text></a>) :
                    (<Link href="/signin"><a><Text>Sign in</Text></a></Link>)
                }
            </div>
        </nav>
    )
}
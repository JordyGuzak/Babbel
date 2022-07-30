import Link from 'next/link'
import classNames from 'classnames'

import styles from 'components/navbar/navbar.module.css'
import Text from 'components/text'
import User from 'models/user'
import { useAuth } from 'hooks/auth'

interface INavBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    user?: User | null |undefined
}

export default function NavBar({user, className, ...props }: INavBarProps) {

    const { signOut } = useAuth()

    return (
        <nav className={classNames(styles.nav, className)} {...props}>
            <div className={styles.brand}><Link href="/"><a><span>Babbel</span></a></Link></div>
            <div className={styles.controls}>
                {user ?
                    (<a onClick={_ => signOut()}><Text>Sign out</Text></a>) :
                    (<Link href="/signin"><a><Text>Sign in</Text></a></Link>)
                }
            </div>
        </nav>
    )
}

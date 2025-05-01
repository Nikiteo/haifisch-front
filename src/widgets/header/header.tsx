import { logo } from '@/shared/assets'
import styles from './header.module.css'
import { NavMenu, ContactButton } from '@/features'

export const Header = () => (
	<header className={styles.header}>
		<img src={logo} className={styles.logo} />
		<NavMenu />
		<ContactButton />
	</header>
)

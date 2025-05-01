import { memo } from 'react'
import styles from './nav-menu.module.css'
import { NavItem } from './nav-item'

export const NavMenu = memo(() => (
	<nav className={styles.nav}>
		<NavItem id='about'>О нас</NavItem>
		<NavItem id='catalog'>Каталог</NavItem>
		<NavItem id='stores'>Магазины</NavItem>
	</nav>
))

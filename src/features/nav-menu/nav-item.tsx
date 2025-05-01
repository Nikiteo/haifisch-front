import { memo, useCallback } from 'react'
import styles from './nav-menu.module.css'

interface NavItemProps {
	id: string
	children: React.ReactNode
}

export const NavItem = memo(({ id, children }: NavItemProps) => {
	const handleClick = useCallback(() => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}, [id])

	return (
		<button className={styles.navItem} onClick={handleClick}>
			{children}
		</button>
	)
})

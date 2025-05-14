import { memo } from 'react'
import { Stack } from '@mui/material'
import { NavItem } from './nav-item'

interface NavMenuProps {
	vertical?: boolean
}

export const NavMenu = memo(({ vertical = false }: NavMenuProps) => (
	<Stack
		component='nav'
		direction={vertical ? 'column' : 'row'}
		spacing={vertical ? 2 : 9.5}
		sx={{
			mx: vertical ? 0 : 9.5,
			my: vertical ? 2 : 0,
			flexGrow: 1,
			justifyContent: 'center',
			alignItems: vertical ? 'flex-start' : 'center',
		}}
	>
		<NavItem sx={{ fontSize: { xl: 18, lg: 16 } }} targetId='about'>
			О нас
		</NavItem>
		<NavItem sx={{ fontSize: { xl: 18, lg: 16 } }} targetId='catalog'>
			Каталог
		</NavItem>
		<NavItem sx={{ fontSize: { xl: 18, lg: 16 } }} targetId='stores'>
			Магазины
		</NavItem>
	</Stack>
))

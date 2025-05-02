import { memo } from 'react'
import { Stack } from '@mui/material'
import { NavItem } from './nav-item'

export const NavMenu = memo(() => (
	<Stack
		component='nav'
		direction='row'
		spacing={4}
		sx={{
			mx: 4,
			flexGrow: 1,
			justifyContent: 'center',
		}}
	>
		<NavItem targetId='about'>О нас</NavItem>
		<NavItem targetId='catalog'>Каталог</NavItem>
		<NavItem targetId='stores'>Магазины</NavItem>
	</Stack>
))

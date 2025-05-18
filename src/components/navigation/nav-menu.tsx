import { memo } from 'react'
import { Stack, type SxProps, type Theme } from '@mui/material'
import { NavItem } from './nav-item'

interface NavMenuProps {
	vertical?: boolean
	itemProps?: Omit<SxProps<Theme>, 'color'>
}

export const NavMenu = memo(({ vertical = false, itemProps }: NavMenuProps) => (
	<Stack
		component='nav'
		direction={vertical ? 'column' : 'row'}
		spacing={vertical ? 7 : 8}
		pl={15}
		sx={{
			alignItems: vertical ? 'flex-start' : 'center',
		}}
	>
		<NavItem {...itemProps} targetId='about'>
			О нас
		</NavItem>
		<NavItem {...itemProps} targetId='catalog'>
			Каталог
		</NavItem>
		<NavItem {...itemProps} targetId='stores'>
			Магазины
		</NavItem>
	</Stack>
))

import { StyledNavItem } from './styles'
import { type ButtonProps } from '@mui/material'

import { memo, useCallback } from 'react'

interface NavItemProps extends ButtonProps {
	targetId: string
}

export const NavItem = memo(
	({ targetId, children, ...props }: NavItemProps) => {
		const handleClick = useCallback(() => {
			document
				.getElementById(targetId)
				?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, [targetId])

		return (
			<StyledNavItem onClick={handleClick} disableRipple {...props}>
				{children}
			</StyledNavItem>
		)
	}
)

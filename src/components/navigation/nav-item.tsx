import { Button, type ButtonProps, styled } from '@mui/material'

import { memo, useCallback } from 'react'

interface NavItemProps extends ButtonProps {
	targetId: string
}

const StyledNavItem = styled(Button)(({ theme }) => ({
	color: `${theme.palette.text.primary}`,
	fontSize: 18,
	fontWeight: 300,
	lineHeight: 1,
	padding: 0,
	minWidth: 'auto',
	textTransform: 'none',
	position: 'relative',
	backgroundColor: 'transparent',
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: '-3px',
		left: 0,
		width: '100%',
		height: '1px',
		backgroundColor: theme.palette.primary.contrastText,
		transform: 'scaleX(0)',
		transformOrigin: 'bottom right',
		transition: 'transform 0.3s ease',
	},
	'&:hover': {
		backgroundColor: 'transparent',
		'&::after': {
			transform: 'scaleX(1)',
			transformOrigin: 'bottom left',
		},
	},
}))

export const NavItem = memo(
	({ targetId, children, ...props }: NavItemProps) => {
		const handleClick = useCallback(() => {
			document
				.getElementById(targetId)
				?.scrollIntoView({ behavior: 'smooth' })
		}, [targetId])

		return (
			<StyledNavItem onClick={handleClick} disableRipple {...props}>
				{children}
			</StyledNavItem>
		)
	}
)

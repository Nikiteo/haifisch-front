import { memo, useCallback } from 'react'
import { Button, type ButtonProps, styled } from '@mui/material'

interface NavItemProps extends ButtonProps {
	targetId: string
}

const StyledNavItem = styled(Button)(({ theme }) => ({
	color: `${theme.palette.primary.contrastText}`,
	fontWeight: 300,
	lineHeight: '100%',
	padding: 0,
	minWidth: 'auto',
	textTransform: 'none',
	'&:hover': {
		backgroundColor: 'transparent',
		textDecoration: 'underline',
	},
}))

export const NavItem = memo(
	({ targetId, children, ...props }: NavItemProps) => {
		const handleClick = useCallback(() => {
			document
				.getElementById(targetId)
				?.scrollIntoView({ behavior: 'smooth' })
		}, [])

		return (
			<StyledNavItem onClick={handleClick} disableRipple {...props}>
				{children}
			</StyledNavItem>
		)
	}
)

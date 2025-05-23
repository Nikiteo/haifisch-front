import { styled, Button } from '@mui/material'

export const StyledNavItem = styled(Button)(({ theme }) => ({
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

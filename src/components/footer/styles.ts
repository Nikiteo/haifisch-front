import { LOGO_SIZES } from './constants'
import { Link, styled } from '@mui/material'

export const footerStyles = () => ({
	root: {
		bgcolor: 'secondary.main',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
	},
	contentContainer: {
		flexDirection: { xl: 'row', lg: 'row', md: 'column' },
		alignContent: { xl: 'center', lg: 'center', md: 'flex-start' },
		alignItems: { xl: 'center', lg: 'center', md: 'flex-start' },
	},
	linksContainer: {
		pl: { xl: 25, lg: 6, md: 6, sm: 5, xs: 5 },
		width: { xl: '35%', lg: '40%' },
		mb: { xs: 5, sm: 5, md: 9, lg: 0, xl: 0 },
	},
	heading: {
		lineHeight: '1',
		textTransform: 'uppercase',
		color: 'secondary.contrastText',
		mb: { xl: 15, lg: 15, md: 12.5, sm: 11.5, xs: 10 },
		mt: { xl: 0, lg: 0, md: 20, sm: 15, xs: 12.5 },
		fontSize: { xl: 34, lg: 28, md: 24, sm: 22, xs: 18 },
	},
	copyrightContainer: {
		pt: 9,
		pl: { xl: 25, lg: 6, md: 6, sm: 5, xs: 5 },
		pb: { xl: 30, lg: 25, md: 20, sm: 15, xs: 12.5 },
	},
	logo: {
		width: {
			xs: LOGO_SIZES.xs.width,
			sm: LOGO_SIZES.sm.width,
			md: LOGO_SIZES.md.width,
			lg: LOGO_SIZES.lg.width,
			xl: LOGO_SIZES.xl.width,
		},
		height: {
			xs: LOGO_SIZES.xs.height,
			sm: LOGO_SIZES.sm.height,
			md: LOGO_SIZES.md.height,
			lg: LOGO_SIZES.lg.height,
			xl: LOGO_SIZES.xl.height,
		},
		objectFit: 'contain',
		transition: 'all 0.3s ease',
	},
})

export const StyledFooterLink = styled(Link)(({ theme }) => ({
	position: 'relative',
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: '-3px',
		left: 0,
		width: '100%',
		height: '1px',
		backgroundColor: theme.palette.secondary.contrastText,
		transform: 'scaleX(0)',
		transformOrigin: 'bottom right',
		transition: 'transform 0.3s ease',
	},
	'&:hover::after': {
		transform: 'scaleX(1)',
		transformOrigin: 'bottom left',
	},
	letterSpacing: 0,
	color: theme.palette.secondary.contrastText,
	textDecoration: 'none',
})) as typeof Link

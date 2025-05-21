import { Box, styled, Typography, type Theme } from '@mui/material'

export const Heading = styled(Typography)(({ theme }) => ({
	lineHeight: 1.4,
	textTransform: 'uppercase',
	fontSize: 18,
	[theme.breakpoints.up('xs')]: { fontSize: 22 },
	[theme.breakpoints.up('md')]: { fontSize: 24 },
	[theme.breakpoints.up('lg')]: { fontSize: 28 },
	[theme.breakpoints.up('xl')]: { fontSize: 34 },
})) as typeof Typography

export const Text = styled(Typography)(({ theme }) => ({
	lineHeight: 1.4,
	[theme.breakpoints.down('sm')]: { fontSize: 15 },
})) as typeof Typography

export const ImageContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	maxWidth: 1240,
	height: 432,
	margin: '0 auto',
	overflow: 'hidden',
	borderRadius: theme.shape.borderRadius,

	[theme.breakpoints.down('lg')]: {
		height: 360,
	},
	[theme.breakpoints.down('md')]: {
		height: 280,
	},
}))

export const heroStyles = (theme: Theme) => ({
	section: {
		my: { xl: 30, lg: 25, md: 20, sm: 15, xs: 12.5 },
		mx: { xl: 25, lg: 6, md: 6, sm: 5, xs: 5 },
	},
	textContainer: {
		width: {
			xl: 'calc(50% + 48px)',
			lg: 'calc(50% + 26px)',
		},
		mb: { xl: 15, lg: 15, md: 12.5, sm: 11.5, xs: 10 },
	},
	gaps: {
		gap: { xl: 12, lg: 6.5, md: 2.5, xs: 1 },
	},
	additionalText: {
		color: theme.palette.text.secondary,
		mt: { xl: 9, lg: 9, md: 8, sm: 6, xs: 5 },
		width: '70%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
})

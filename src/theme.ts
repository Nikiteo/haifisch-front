import { createTheme, type Theme } from '@mui/material/styles'

const baseTheme = createTheme({
	spacing: 4,
	palette: {
		primary: {
			main: '#ECECEC',
			contrastText: '#3C3C3C',
		},
		secondary: {
			main: '#262626',
			contrastText: '#FBFBFB',
		},
		text: {
			primary: '#262626',
			secondary: '#6C6C6C',
		},
		common: {
			black: '#000000',
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: '"Inter", sans-serif',
		allVariants: {
			letterSpacing: 0.3,
		},
		h1: {
			fontFamily: '"Playfair Display", serif',
			fontWeight: 300,
			fontSize: '3.125rem',
			lineHeight: '1.1',
			letterSpacing: 0,
		},
		h2: {
			fontFamily: '"Playfair Display", serif',
			fontWeight: 300,
			fontSize: '2.125rem',
		},
		body1: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 300,
			lineHeight: '1.4',
			
		},
	},
	breakpoints: {
		values: {
			xs: 320, // 320-480
			sm: 480, // 480-640
			md: 640, // 640-960
			lg: 960, // 960-1200
			xl: 1200, // 1200-1440
		},
	},
})

const theme = createTheme(baseTheme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '30px',
					boxSizing: 'border-box',
					padding: 0,
					fontSize: '16px',
					lineHeight: 1,
					fontWeight: 300,
					textTransform: 'none',
					boxShadow: 'none',
					'&:hover': {
						boxShadow: 'none',
					},
				},
			},
			variants: [
				{
					props: { variant: 'catalog' },
					style: ({ theme }: { theme: Theme }) => ({
						backgroundColor: theme.palette.secondary.main,
						color: theme.palette.secondary.contrastText,
						'&:hover': {
							backgroundColor: theme.palette.primary.contrastText,
						},
						'&:focus': {
							backgroundColor: theme.palette.common.black,
						},
						'&:disabled': {
							backgroundColor: theme.palette.text.secondary,
						},
					}),
				},
				{
					props: { variant: 'contact' },
					style: ({ theme }: { theme: Theme }) => ({
						backgroundColor: 'transparent',
						color: theme.palette.text.primary,
						border: `1px solid ${theme.palette.text.primary}`,
						'&:hover': {
							backgroundColor: theme.palette.text.primary,
							color: theme.palette.secondary.contrastText,
						},
						'&:focus': {
							backgroundColor: 'transparent',
							color: theme.palette.text.primary,
							border: `2px solid ${theme.palette.text.primary}`,
						},
						'&:disabled': {
							backgroundColor: 'transparent',
							color: theme.palette.text.secondary,
							border: `1.5px solid ${theme.palette.text.secondary}`,
						},
					}),
				},
			],
		},
	},
})

export default theme

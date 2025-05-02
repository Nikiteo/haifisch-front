import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	spacing: 4,
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					minWidth: '220px',
					height: '58px',
					borderRadius: '30px',
					boxSizing: 'border-box',
					padding: 0,
					fontSize: '16px',
					fontWeight: 400,
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
					style: {
						backgroundColor: '#262626',
						color: '#FBFBFB',
						'&:hover': {
							backgroundColor: '#3C3C3C',
						},
						'&:focused': {
							backgroundColor: '#000000',
						},
						'&:disabled': {
							backgroundColor: '#6C6C6C',
						},
					},
				},
				{
					props: { variant: 'contact' },
					style: {
						backgroundColor: 'transparent',
						color: '#262626',
						border: '1px solid #262626',
						'&:hover': {
							backgroundColor: '#262626',
							color: '#FBFBFB',
						},
						'&:focused': {
							backgroundColor: 'transparent',
							color: '#262626',
							border: '2px solid #262626',
						},
						'&:disabled': {
							backgroundColor: 'transparent',
							color: '#6C6C6C',
							border: '1.5px solid #6C6C6C',
						},
					},
				},
			],
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: '"Inter", sans-serif',
		h1: {
			fontFamily: '"Playfair Display", serif',
			fontWeight: 400,
			fontSize: '3.125rem',
			letterSpacing: 0,
		},
		h2: {
			fontFamily: '"Playfair Display", serif',
			fontWeight: 600,
			fontSize: '2.75rem',
		},
		h3: {
			fontFamily: '"Playfair Display", serif',
			fontWeight: 500,
			fontSize: '2rem',
		},
		h4: {
			fontFamily: '"Playfair Display", serif',
			fontWeight: 500,
			fontSize: '1.75rem',
		},
		h5: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 600,
			fontSize: '1.5rem',
		},
		h6: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 600,
			fontSize: '1.25rem',
		},
		subtitle1: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 500,
		},
		subtitle2: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 400,
		},
		body1: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 400,
			lineHeight: '110%',
		},
		body2: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 400,
			fontSize: '0.875rem',
		},
		button: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 500,
			textTransform: 'none',
		},
		caption: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 400,
		},
		overline: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: 400,
		},
	},
})

export default theme

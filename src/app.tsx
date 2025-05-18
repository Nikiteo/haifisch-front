import './global.css'
import Main from '@/pages/main-page'
import { Box, ThemeProvider } from '@mui/material'
import theme from '@/theme'
import Hero from '@/pages/hero-page'
import '@fontsource/inter/200.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/400-italic.css'

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
			<Hero />
			<Box
				component='section'
				sx={{
					height: '50vh',
				}}
			/>
		</ThemeProvider>
	)
}

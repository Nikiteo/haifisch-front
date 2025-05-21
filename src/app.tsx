import './global.css'
import { ThemeProvider } from '@mui/material'

import Footer from '@/pages/footer-page'
import Hero from '@/pages/hero-page'
import Main from '@/pages/main-page'
import theme from '@/theme'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
			<Hero />
			<Footer />
		</ThemeProvider>
	)
}

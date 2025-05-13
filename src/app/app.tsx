import '@/app/styles/global.css'
import Main from '@/pages/main-page'
import { Box, ThemeProvider } from '@mui/material'
import theme from '@/shared/theme'
import Hero from '@/pages/hero-page'

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
			<Hero />
			<Box
				component='section'
				sx={{
					height: '100vh',
				}}
			/>
		</ThemeProvider>
	)
}

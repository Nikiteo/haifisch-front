import '@/app/styles/global.css'
import Main from '@/pages/main-page'
import { ThemeProvider } from '@mui/material'
import theme from '@/shared/theme'

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	)
}

import { App } from '@/app/app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'

const container = document.getElementById('root')
if (!container) throw new Error('Root container not found')

const root = createRoot(container)

root.render(
	<StrictMode>
		<CssBaseline />
		<App />
	</StrictMode>
)

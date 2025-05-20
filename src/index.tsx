import { CssBaseline } from '@mui/material'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'


const container = document.getElementById('root')
if (!container) throw new Error('Root container not found')

const root = createRoot(container)

root.render(
	<StrictMode>
		<CssBaseline />
		<App />
	</StrictMode>
)

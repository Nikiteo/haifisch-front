import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
	plugins: [react()],
	publicDir: 'public',
	resolve: {
		alias: {
			'@': `${__dirname}/src`,
		},
	},
})

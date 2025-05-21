import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
	base: '/',
	plugins: [react()],
	publicDir: 'public',
	build: {
		target: 'esnext',
	},
	optimizeDeps: {
		exclude: ['@yandex/ymaps3-default-ui-theme'],
	},
	resolve: {
		alias: {
			'@': `${__dirname}/src`,
		},
	},
})

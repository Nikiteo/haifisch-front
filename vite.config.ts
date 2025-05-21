import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { createHtmlPlugin } from 'vite-plugin-html'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		base: '/',
		plugins: [
			react(),
			createHtmlPlugin({
				inject: {
					data: {
						yandexApiKey: env.VITE_YANDEX_MAPS_API_KEY || '',
					},
				},
				minify: true,
			}),
		],
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
	}
})

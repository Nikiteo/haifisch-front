import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: './tsconfig.app.json',
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['src/features/*/*/ui/*'],
							message:
								'Нельзя использовать UI компоненты фичи напрямую, используйте публичный API',
						},
						{
							group: ['src/widgets/*/*/ui/*'],
							message:
								'Нельзя использовать UI компоненты виджета напрямую, используйте публичный API',
						},
						{
							group: ['src/app/*'],
							message:
								'Слой app нельзя использовать в других слоях',
						},
					],
				},
			],
			'import/no-restricted-paths': [
				'error',
				{
					zones: [
						{
							target: './src/app',
							from: './src/entities',
							message: 'Слой app не должен зависеть от entities',
						},
						{
							target: './src/widgets',
							from: './src/features',
							message: 'Виджеты не должны зависеть от фич',
						},
						{
							target: './src/features',
							from: './src/widgets',
							message: 'Фичи не должны зависеть от виджетов',
						},
					],
				},
			],
		},
		settings: {
			'import/resolver': {
				typescript: {
					project: './tsconfig.app.json',
				},
			},
		},
	}
)

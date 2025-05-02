import { ButtonPropsVariantOverrides } from '@mui/material/Button'

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		catalog: true
		contact: true
	}
}

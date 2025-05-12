import { ButtonPropsVariantOverrides } from '@mui/material/Button'

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		catalog: true
		contact: true
	}
}

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true
		sm: true
		md: true
		lg: true
		xl: true
		xxl: true
	}
}

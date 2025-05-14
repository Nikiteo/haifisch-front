import type { ButtonOwnProps } from '@mui/material'

export const LOGO_SIZES = {
	xl: { width: 140, height: 35 }, // 1200-1440
	lg: { width: 130, height: 32 }, // 960-1200
	md: { width: 98, height: 24 }, // 640-960
	sm: { width: 82, height: 20 }, // 480-640
	xs: { width: 76, height: 19 }, // 320-480
}

export interface LogoProps {
	href?: string
}

export interface MobileDrawerProps {
	open: boolean
	onClose: () => void
	onContactClick: () => void
}

export interface ContactButtonProps extends ButtonOwnProps {
	onClick: () => void
	variant?: 'text' | 'contact'
}

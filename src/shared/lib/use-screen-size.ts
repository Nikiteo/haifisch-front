import { useTheme, useMediaQuery } from '@mui/material'

export interface ScreenSize {
	isXxl: boolean
	isXl: boolean
	isLg: boolean
	isMd: boolean
	isSm: boolean
	isXs: boolean
	currentSize: string
}

export const useScreenSize = (): ScreenSize => {
	const theme = useTheme()

	const isXxl = useMediaQuery(theme.breakpoints.up('xxl')) // 1440+
	const isXl = useMediaQuery(theme.breakpoints.between('xl', 'xxl')) // 1200-1440
	const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl')) // 960-1200
	const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')) // 640-960
	const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')) // 480-640
	const isXs = useMediaQuery(theme.breakpoints.down('sm')) // 320-480

	const currentSize = isXxl
		? 'xxl'
		: isXl
		? 'xl'
		: isLg
		? 'lg'
		: isMd
		? 'md'
		: isSm
		? 'sm'
		: 'xs'

	return {
		isXxl,
		isXl,
		isLg,
		isMd,
		isSm,
		isXs,
		currentSize,
	}
}

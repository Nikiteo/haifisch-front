import {
	BACKGROUND_SIZES,
	MARKET_LOGO_SIZES,
	OZON_LOGO_SIZES,
} from './constants'

export const storeStyles = () => ({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: {
			xs: BACKGROUND_SIZES.xs.width,
			sm: BACKGROUND_SIZES.sm.width,
			md: BACKGROUND_SIZES.md.width,
			lg: BACKGROUND_SIZES.lg.width,
			xl: BACKGROUND_SIZES.xl.width,
		},
		height: {
			xs: BACKGROUND_SIZES.xs.height,
			sm: BACKGROUND_SIZES.sm.height,
			md: BACKGROUND_SIZES.md.height,
			lg: BACKGROUND_SIZES.lg.height,
			xl: BACKGROUND_SIZES.xl.height,
		},
		position: 'relative',
	},
	backgroundImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		opacity: 0.75,
		zIndex: 1,
	},
	market: {
		width: {
			xs: MARKET_LOGO_SIZES.xs.width,
			sm: MARKET_LOGO_SIZES.sm.width,
			md: MARKET_LOGO_SIZES.md.width,
			lg: MARKET_LOGO_SIZES.lg.width,
			xl: MARKET_LOGO_SIZES.xl.width,
		},
		height: {
			xs: MARKET_LOGO_SIZES.xs.height,
			sm: MARKET_LOGO_SIZES.sm.height,
			md: MARKET_LOGO_SIZES.md.height,
			lg: MARKET_LOGO_SIZES.lg.height,
			xl: MARKET_LOGO_SIZES.xl.height,
		},
		zIndex: 2,
	},
	ozon: {
		width: {
			xs: OZON_LOGO_SIZES.xs.width,
			sm: OZON_LOGO_SIZES.sm.width,
			md: OZON_LOGO_SIZES.md.width,
			lg: OZON_LOGO_SIZES.lg.width,
			xl: OZON_LOGO_SIZES.xl.width,
		},
		height: {
			xs: OZON_LOGO_SIZES.xs.height,
			sm: OZON_LOGO_SIZES.sm.height,
			md: OZON_LOGO_SIZES.md.height,
			lg: OZON_LOGO_SIZES.lg.height,
			xl: OZON_LOGO_SIZES.xl.height,
		},
		zIndex: 2,
	},
	button: {
		width: {
			xs: 212,
			sm: 268,
			md: 268,
			lg: 268,
			xl: 268,
		},
		height: {
			xs: 42,
			sm: 54,
			md: 54,
			lg: 58,
			xl: 58,
		},
		objectFit: 'contain',
		transition: 'all 0.3s ease',
		zIndex: 2,
	},
})

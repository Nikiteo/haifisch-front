import { Link, Box } from '@mui/material'

import { LOGO_SIZES, type LogoProps } from '../constants'

import { logo } from '@/assets'

export const Logo = ({ href = 'https://haifisch.ru' }: LogoProps) => {
	return (
		<Link
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			sx={{ display: 'flex' }}
		>
			<Box
				component='img'
				src={logo}
				alt='Логотип Haifisch'
				sx={{
					width: {
						xs: LOGO_SIZES.xs.width,
						sm: LOGO_SIZES.sm.width,
						md: LOGO_SIZES.md.width,
						lg: LOGO_SIZES.lg.width,
						xl: LOGO_SIZES.xl.width,
					},
					height: {
						xs: LOGO_SIZES.xs.height,
						sm: LOGO_SIZES.sm.height,
						md: LOGO_SIZES.md.height,
						lg: LOGO_SIZES.lg.height,
						xl: LOGO_SIZES.xl.height,
					},
					objectFit: 'contain',
					transition: 'all 0.3s ease',
				}}
			/>
		</Link>
	)
}

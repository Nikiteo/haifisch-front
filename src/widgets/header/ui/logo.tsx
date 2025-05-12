import { Box, Link } from '@mui/material'
import { logo } from '@/shared/assets'
import { LOGO_SIZES, type LogoProps } from '../model/constants'

export const Logo = ({
	size = 'lg',
	href = 'https://haifisch.ru',
}: LogoProps) => (
	<Link
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		sx={{ lineHeight: 0 }}
	>
		<Box
			component='img'
			src={logo}
			alt='Логотип Haifisch'
			sx={{
				...LOGO_SIZES[size],
				objectFit: 'contain',
				transition: 'all 0.3s ease',
			}}
		/>
	</Link>
)

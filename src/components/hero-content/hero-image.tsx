import { hero } from '@/assets'
import { Box } from '@mui/material'

export const HeroImage = () => {
	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: 1240,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				component='img'
				src={hero}
				alt='Изделия из искусственного камня'
				loading='lazy'
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'fill',
				}}
			/>
		</Box>
	)
}

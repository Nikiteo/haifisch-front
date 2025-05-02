import { Box } from '@mui/material'
import { main } from '@/shared/assets'

export const HeroImage = () => (
	<Box
		sx={{
			width: '50%',
			height: '100%',
			position: 'relative',
		}}
	>
		<Box
			component='img'
			src={main}
			alt='Изделия из искусственного камня'
			loading='lazy'
			sx={{
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				objectPosition: 'center',
			}}
		/>
	</Box>
)

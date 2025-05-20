import { Box } from '@mui/material'
import { hero } from '@/assets'

export const HeroImage = () => (
	<Box width='100%' maxWidth={1240} height='100%' maxHeight={432} mx='auto'>
		<Box
			component='img'
			src={hero}
			alt='Изделия из искусственного камня'
			loading='lazy'
			width='100%'
			height='100%'
			sx={{ objectFit: 'cover' }}
		/>
	</Box>
)

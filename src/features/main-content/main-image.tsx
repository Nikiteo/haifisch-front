import { Box } from '@mui/material'
import { main } from '@/shared/assets'

export const MainImage = () => (
	<Box
		sx={{
			width: '60%',
			height: '100%',
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

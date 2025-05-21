import { Box } from '@mui/material'

import { main } from '@/assets'

export const MainImage = ({ asBackground = false }: { asBackground?: boolean }) => (
	<Box
		sx={{
			width: asBackground
				? '100%'
				: {
						xl: 'calc(50% + 100px + 48px)',
						lg: 'calc(50% + 24px + 26px)',
						md: 'calc(50% + 10px + 26px)',
				  },
			height: '100%',
			...(asBackground && {
				position: 'absolute',
				top: 0,
				left: 0,
			}),
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
				...(asBackground && {
					filter: 'blur(2px)',
				}),
			}}
		/>
	</Box>
)

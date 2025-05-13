import { Typography, Box } from '@mui/material'

export const HeroText = () => {
	return (
		<Box
			sx={{
				width: 620,
				display: 'flex',
				flexDirection: 'column',
				pb: 15,
			}}
		>
			<Box sx={{ width: '100%', textAlign: 'right' }}>
				<Typography
					variant='h2'
					lineHeight='1.4'
					textTransform='uppercase'
				>
					Мастерская Haifisch –
				</Typography>
			</Box>

			<Typography variant='h2' lineHeight='1.4' textTransform='uppercase'>
				создаём уникальные предметы интерьера
			</Typography>

			<Typography
				component='p'
				variant='body1'
				fontWeight={300}
				lineHeight='1.4'
				pt={9}
				sx={{
					width: '60%',
					alignSelf: 'flex-end',
				}}
			>
				Наши изделия из искусственного камня сочетают в себе
				элегантность и практичность. Каждый предмет имеет неповторимый
				природный узор и текстуру и станет ярким акцентом в любом
				интерьере.
			</Typography>
		</Box>
	)
}

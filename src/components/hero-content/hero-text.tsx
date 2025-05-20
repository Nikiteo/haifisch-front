import { Box, Typography } from '@mui/material'

export const HeroText = () => {
	const textStyles = {
		fontSize: { xl: 34, lg: 28, md: 24, sm: 22, xs: 18 },
		lineHeight: '1.4',
		textTransform: 'uppercase',
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			sx={{
				mb: { xl: 15, lg: 15, md: 12.5, sm: 11.5, xs: 10 },
			}}
		>
			<Typography variant='h2' sx={textStyles}>
				Мастерская Haifisch –
			</Typography>
			<Typography variant='h2' sx={textStyles}>
				создаём уникальные предметы интерьера
			</Typography>

			<Typography
				variant='body1'
				color='text.secondary'
				lineHeight='1.4'
				mt={{ xl: 9, lg: 9, md: 8, sm: 6, xs: 5 }}
				sx={{ width: { xl: '65%', lg: '65%' } }}
			>
				Наши изделия из искусственного камня сочетают в себе
				элегантность и практичность. Каждый предмет имеет неповторимый
				природный узор и текстуру и станет ярким акцентом в любом
				интерьере.
			</Typography>
		</Box>
	)
}

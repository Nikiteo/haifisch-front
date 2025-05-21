import { Box, Button, Typography, useTheme } from '@mui/material'

export const MainText = () => {
	const theme = useTheme()

	return (
		<Box
			color='text.primary'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			position='relative'
			sx={{
				[theme.breakpoints.up('md')]: {
					ml: { xl: 25, lg: 6, md: 6 },
				},
				[theme.breakpoints.down('md')]: {
					mx: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 },
				},
				width: {
					xl: '50%',
					lg: '50%',
					md: '50%',
					sm: '100%',
					xs: '100%',
				},
			}}
		>
			<Typography
				variant='h1'
				textTransform='uppercase'
				position='relative'
				sx={{
					fontSize: {
						xl: 50,
						lg: 38,
						md: 32,
						sm: 32,
						xs: 26,
					},
				}}
			>
				Изделия{' '}
				<Typography
					variant='h1'
					component='span'
					fontStyle='italic'
					display='inline-block'
					textTransform='lowercase'
					sx={{
						fontSize: {
							xl: 44,
							lg: 32,
							md: 32,
							sm: 32,
							xs: 26,
						},
					}}
				>
					для
				</Typography>{' '}
				декора
				<Box
					component='span'
					display='block'
					textAlign='right'
					width='100%'
				>
					<Typography
						variant='h1'
						component='span'
						fontStyle='italic'
						display='inline-block'
						textTransform='lowercase'
						sx={{
							fontSize: {
								xl: 44,
								lg: 32,
								md: 32,
								sm: 32,
								xs: 26,
							},
						}}
					>
						из
					</Typography>{' '}
					искусственного камня
				</Box>
			</Typography>

			<Typography
				component='p'
				variant='body1'
				lineHeight='1.4'
				width='80%'
				alignSelf='flex-start'
				my={{ xl: 9, lg: 6, md: 6, sm: 5, xs: 5 }}
			>
				Получите специальные предложения при{'\u00A0'}оформлении заказа
				оптом. А{'\u00A0'}также{'\u00A0'}воплотите свои идеи и{'\u00A0'}
				закажите продукцию по{'\u00A0'}индивидуальной разработке.
			</Typography>

			<Button
				variant='catalog'
				sx={{
					width: {
						xs: 164,
						sm: 164,
						md: 200,
						lg: 220,
						xl: 220,
					},
					height: {
						xs: 46,
						sm: 46,
						md: 54,
						lg: 58,
						xl: 58,
					},
					alignSelf: 'flex-start',
				}}
			>
				Каталог
			</Button>
		</Box>
	)
}

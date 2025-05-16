import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const MainText = () => {
	return (
		<Box
			sx={{
				width: {
					xl: '45%',
					lg: '45%',
					md: '45%',
					sm: '100%',
					xs: '100%',
				},
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				position: 'relative',
				zIndex: 1,
				ml: { xl: 25, lg: 6, md: 6 },
				px: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 },
			}}
		>
			<Typography
				variant='h1'
				lineHeight='1.1'
				textTransform='uppercase'
				sx={{
					position: 'relative',
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
					sx={{
						fontSize: {
							xl: 44,
							lg: 32,
							md: 32,
							sm: 32,
							xs: 26,
						},
						fontStyle: 'italic',
						display: 'inline-block',
						textTransform: 'lowercase',
					}}
				>
					для
				</Typography>{' '}
				декора
				<Box
					component='span'
					sx={{
						display: 'block',
						textAlign: 'right',
						width: '100%',
					}}
				>
					<Typography
						variant='h1'
						component='span'
						sx={{
							fontSize: {
								xl: 44,
								lg: 32,
								md: 32,
								sm: 32,
								xs: 26,
							},
							fontStyle: 'italic',
							display: 'inline-block',
							textTransform: 'lowercase',
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
				my={{ xl: 9, lg: 6, md: 6, sm: 5, xs: 5 }}
				sx={{
					width: '80%',
					alignSelf: 'flex-start',
				}}
			>
				Получите специальные предложения при оформлении заказа оптом. А
				также воплотите свои идеи и закажите продукцию по индивидуальной
				разработке.
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

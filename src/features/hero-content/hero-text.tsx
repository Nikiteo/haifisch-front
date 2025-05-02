import { Button, Typography, Box } from '@mui/material'

export const HeroText = () => (
	<Box
		sx={{
			width: '50%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			ml: 25,
		}}
	>
		<Typography
			variant='h1'
			lineHeight='1.1'
			textTransform='uppercase'
			sx={{ position: 'relative' }}
		>
			Изделия{' '}
			<Typography
				variant='h1'
				component='span'
				sx={{
					fontSize: '2.75rem',
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
						fontSize: '2.75rem',
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
			fontWeight={300}
			mt={9}
			mb={9}
			lineHeight='1.4'
			sx={{
				maxWidth: '65ch',
				width: '70%',
				alignSelf: 'flex-start',
			}}
		>
			Получите специальные предложения при оформлении заказа оптом. А
			также воплотите свои идеи и закажите продукцию по индивидуальной
			разработке.
		</Typography>

		<Button variant='catalog' sx={{ alignSelf: 'flex-start' }}>
			Каталог
		</Button>
	</Box>
)

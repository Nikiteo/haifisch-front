import type { ScreenSize } from '@/shared'
import { Button, Typography, Box } from '@mui/material'
import { memo } from 'react'

interface MainTextProps {
	screenSize: ScreenSize
}

export const MainText = memo(({ screenSize }: MainTextProps) => {
	const { isXxl } = screenSize

	return (
		<Box
			sx={{
				width: '45%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				ml: isXxl ? 25 : 6,
			}}
		>
			<Typography
				variant='h1'
				lineHeight='1.1'
				textTransform='uppercase'
				sx={{
					position: 'relative',
					fontSize: isXxl ? '3.125rem' : '2.375rem',
				}}
			>
				Изделия{' '}
				<Typography
					variant='h1'
					component='span'
					sx={{
						fontSize: '2.75rem',
						fontStyle: 'italic',
						fontFamily: 'Playfair',
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
							fontFamily: 'Playfair',
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
				mt={isXxl ? 9 : 6}
				mb={isXxl ? 9 : 6}
				lineHeight='1.4'
				sx={{
					width: '80%',
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
})

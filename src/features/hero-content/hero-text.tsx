import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const HeroText = () => {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.down('lg'))

	return (
		<Box
			sx={{
				width: {
					xl: 620,
					lg: 620,
					md: 435,
					sm: 397,
				},
				display: 'flex',
				flexDirection: 'column',
				alignItems: {
					xs: 'center',
				},
				pb: {
					xl: 15,
					lg: 15,
					md: 12.5,
					sm: 11.5,
					xs: 10,
				},
			}}
		>
			<Box
				sx={{
					textAlign: {
						xl: 'right',
						lg: 'right',
						xs: 'center',
					},
				}}
			>
				<Typography
					variant='h2'
					lineHeight='1.4'
					textTransform='uppercase'
					sx={{
						fontSize: {
							xl: 34,
							lg: 28,
							md: 24,
							sm: 22,
							xs: 18,
						},
					}}
				>
					Мастерская Haifisch –
				</Typography>
			</Box>

			{isMd ? (
				<Typography
					variant='h2'
					lineHeight='1.4'
					textTransform='uppercase'
					sx={{
						fontSize: {
							xl: 34,
							lg: 28,
							md: 24,
							sm: 22,
							xs: 18,
						},
						textAlign: {
							xs: 'center',
						},
					}}
				>
					создаём уникальные предметы
					<Typography
						variant='h2'
						lineHeight='1.4'
						textTransform='uppercase'
						sx={{
							fontSize: {
								xl: 34,
								lg: 28,
								md: 24,
								sm: 22,
								xs: 18,
							},
							textAlign: {
								md: 'right',
								sm: 'right',
								xs: 'center',
							},
						}}
					>
						интерьера
					</Typography>
				</Typography>
			) : (
				<Typography
					variant='h2'
					lineHeight='1.4'
					textTransform='uppercase'
					sx={{
						fontSize: {
							xl: 34,
							lg: 28,
							md: 24,
							sm: 22,
							xs: 18,
						},
					}}
				>
					создаём уникальные предметы интерьера
				</Typography>
			)}

			<Typography
				component='p'
				variant='body1'
				fontWeight={300}
				lineHeight='1.4'
				pt={{
					xl: 9,
					lg: 9,
					md: 8,
					sm: 6,
					xs: 5,
				}}
				sx={{
					width: {
						xl: '60%',
						lg: '60%',
					},
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

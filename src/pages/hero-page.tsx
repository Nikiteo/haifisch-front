import { useTheme, useMediaQuery, Box, Stack } from '@mui/material'

import { HeroText, HeroImage } from '@/components'

const Hero = () => {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.down('lg'))
	const isSm = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Box
			component='section'
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				my: {
					xl: 30,
					lg: 26,
					md: 20,
					sm: 15,
					xs: 12.5,
				},
				mx: {
					xl: 25,
					lg: 6,
					md: 6,
					sm: 5,
					xs: 5,
				},
			}}
		>
			<Stack
				direction={isMd ? 'row-reverse' : 'row'}
				sx={{ gap: { xl: 12 } }}
			>
				{!isSm && (
					<Box
						sx={{
							width: {
								xl: '50%',
								lg: '48%',
								md: '48%',
							},
						}}
					/>
				)}
				<Box
					sx={{
						width: {
							xl: '50%',
							lg: '50%',
							md: '50%',
						},
					}}
				>
					<HeroText />
				</Box>
			</Stack>
			<HeroImage />
		</Box>
	)
}

export default Hero

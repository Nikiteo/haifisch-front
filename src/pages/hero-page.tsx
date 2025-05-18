import { HeroText, HeroImage } from '@/components'
import { useTheme, useMediaQuery, Box, Grid } from '@mui/material'

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
				pt: {
					xl: 30,
					lg: 26,
					md: 20,
					sm: 15,
					xs: 12.5,
				},
				px: {
					xl: 25,
					lg: 25,
					md: 6,
					sm: 5,
					xs: 4,
				},
			}}
		>
			<Grid container direction={isMd ? 'row-reverse' : 'row'}>
				{!isSm && <Grid size={!isMd ? 'grow' : 4} />}
				<Grid size='grow'>
					<HeroText />
				</Grid>
			</Grid>
			<HeroImage />
		</Box>
	)
}

export default Hero

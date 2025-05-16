import { HeroImage, HeroText } from '@/features'
import Box from '@mui/material/Box'

const Hero = () => {
	return (
		<Box
			component='section'
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: {
					xl: 'center',
					lg: 'center',
				},
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
			<HeroText />
			<HeroImage />
		</Box>
	)
}

export default Hero

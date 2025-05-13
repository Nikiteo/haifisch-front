import { HeroImage, HeroText } from '@/features'
import { Box } from '@mui/material'

const Hero = () => {
	return (
		<Box
			component='section'
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				pt: 15,
				px: 25,
			}}
		>
			<HeroText />
			<HeroImage />
		</Box>
	)
}

export default Hero

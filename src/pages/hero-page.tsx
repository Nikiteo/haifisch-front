import { useTheme, useMediaQuery, Box, Stack } from '@mui/material'
import { HeroText, HeroImage, heroStyles } from '@/components'
import { hero } from '@/assets'

const Hero = () => {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.down('lg'))
	const isSm = useMediaQuery(theme.breakpoints.down('md'))
	const styles = heroStyles(theme)

	return (
		<Box
			component='section'
			display='flex'
			flexDirection='column'
			sx={styles.section}
		>
			<Stack
				direction={isMd ? 'row-reverse' : 'row'}
				justifyContent='space-between'
				sx={styles.gaps}
			>
				{!isSm && <Box width='50%' />}
				<Box sx={styles.textContainer}>
					<HeroText />
				</Box>
			</Stack>
			<HeroImage src={hero} alt='Изделия из камня' />
		</Box>
	)
}

export default Hero

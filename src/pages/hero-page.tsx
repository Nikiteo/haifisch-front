import { useTheme, useMediaQuery, Box, Stack } from '@mui/material'
import { HeroText, HeroImage } from '@/components'

const Hero = () => {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.down('lg'))
	const isSm = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Box
			component='section'
			display='flex'
			flexDirection='column'
			sx={{
				my: { xl: 30, lg: 25, md: 20, sm: 15, xs: 12.5 },
				mx: { xl: 25, lg: 6, md: 6, sm: 5, xs: 5 },
			}}
		>
			<Stack
				direction={isMd ? 'row-reverse' : 'row'}
				sx={{ gap: { xl: 12 } }}
				justifyContent='space-between'
			>
				{!isSm && <Box sx={{ width: { md: '50%' } }} />}

				<Box sx={{ width: { md: 'calc(50% + 48px)' } }}>
					<HeroText />
				</Box>
			</Stack>
			<Box display='flex' justifyContent='center'>
				<HeroImage />
			</Box>
		</Box>
	)
}

export default Hero

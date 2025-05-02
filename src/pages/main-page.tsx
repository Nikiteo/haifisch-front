import { Header } from '@/widgets/header'
import { HeroText, HeroImage } from '@/features'
import { Box, Stack } from '@mui/material'

const Main = () => (
	<Box
		component='main'
		sx={{
			pt: 4,
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
		}}
	>
		<Header />
		<Stack
			component='section'
			direction='row'
			gap={12.5}
			sx={{
				flex: 1,
				width: '100%',
				overflow: 'hidden',
			}}
		>
			<HeroText />
			<HeroImage />
		</Stack>
	</Box>
)

export default Main

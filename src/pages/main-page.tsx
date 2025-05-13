import { Header } from '@/widgets/header'
import { MainText, MainImage } from '@/features'
import { Box, Stack } from '@mui/material'
import { useScreenSize } from '@/shared'

const Main = () => {
	const screenSize = useScreenSize()
	const { isXxl, isXl, isLg } = screenSize

	const gap = isXxl ? 12.5 : isXl ? 6.5 : isLg ? 2.5 : 1

	return (
		<Box
			component='main'
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				bgcolor: 'var(--color-main)',
			}}
		>
			<Header />
			<Stack
				component='section'
				direction='row'
				gap={gap}
				sx={{
					flex: 1,
					width: '100%',
				}}
			>
				<MainText screenSize={screenSize} />
				<MainImage />
			</Stack>
		</Box>
	)
}

export default Main

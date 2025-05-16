import { Header } from '@/widgets/header'
import { MainText, MainImage } from '@/features'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

const Main = () => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Box
			component='main'
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				bgcolor: 'primary.main',
				position: 'relative',
				pt: { xs: '104px', md: '112px' },
			}}
		>
			<Header />
			{isSm && (
				<Box
					component='div'
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						zIndex: 0,
						opacity: 0.3,
					}}
				>
					<MainImage asBackground />
				</Box>
			)}

			<Stack
				component='section'
				direction={{
					xl: 'row',
					lg: 'row',
					md: 'row',
					sm: 'column',
				}}
				justifyContent={{ sm: 'center', xs: 'center' }}
				alignItems={{ sm: 'center', xs: 'center' }}
				sx={{
					gap: { xl: 12, lg: 6.5, md: 2.5, xs: 1 },
					flex: 1,
					width: '100%',
					position: 'relative',
					zIndex: 1,
					height: 'calc(100vh - 104px)',
					[theme.breakpoints.up('md')]: {
						height: 'calc(100vh - 112px)',
					},
				}}
			>
				<MainText />
				{!isSm && <MainImage />}
			</Stack>
		</Box>
	)
}

export default Main

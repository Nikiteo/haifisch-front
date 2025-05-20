import { useMediaQuery, Box, useTheme, Stack } from '@mui/material'

import { Header, MainImage, MainText } from '@/components'

const Main = () => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Box
			component='main'
			bgcolor='primary.main'
			position='relative'
			display='flex'
			flexDirection='column'
			height='100vh'
			pt={{ xs: '106px', md: '122px' }}
		>
			<Header />
			{isSm && (
				<Box
					component='div'
					position='absolute'
					width='100%'
					height='100%'
					sx={{
						top: 0,
						left: 0,
						zIndex: 0,
						opacity: 0.3,
					}}
				>
					<MainImage asBackground />
				</Box>
			)}

			<Stack
				component='section'
				position='relative'
				width='100%'
				height='calc(100vh - 122px)'
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
					zIndex: 1,
					[theme.breakpoints.down('md')]: {
						height: 'calc(100vh - 106px)',
						px: 5,
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

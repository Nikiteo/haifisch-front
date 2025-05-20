import { Copyrights, FooterText, YandexMap } from '@/components'
import { Box, Stack, useTheme } from '@mui/material'

const Footer = () => {
	const theme = useTheme()

	return (
		<Box
			component='footer'
			bgcolor='secondary.main'
			position='relative'
			height='calc(100vh - 122px)'
			maxHeight={739}
			display='flex'
			flexDirection='column'
			pb={{ xl: 15, lg: 15, md: 12, sm: 10, xs: 6 }}
			sx={{
				[theme.breakpoints.down('md')]: {
					height: 'calc(100vh - 106px)',
				},
			}}
		>
			<Stack
				sx={{
					flexDirection: { xl: 'row', lg: 'row', md: 'column' },
					alignContent: {
						xl: 'center',
						lg: 'center',
						md: 'flex-start',
					},
					alignItems: {
						xl: 'center',
						lg: 'center',
						md: 'flex-start',
					},
				}}
			>
				<FooterText />
				<YandexMap />
			</Stack>
			<Copyrights />
		</Box>
	)
}

export default Footer

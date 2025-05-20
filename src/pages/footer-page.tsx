import { Copyrights, FooterText, YandexMap } from '@/components'
import { Box, Stack, useTheme } from '@mui/material'

const Footer = () => {
	const theme = useTheme()

	return (
		<Box
			component='footer'
			sx={{
				bgcolor: 'secondary.main',
				position: 'relative',
				// pt: { xs: '106px', md: '122px' },
				height: 'calc(100vh - 106px)',
				[theme.breakpoints.up('md')]: {
					height: 'calc(100vh - 122px)',
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

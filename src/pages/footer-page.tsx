import { Copyright, Links, YandexMap, footerStyles } from '@/components'
import { Box, Stack } from '@mui/material'

const FooterPage = () => {
	return (
		<Box component='footer' sx={footerStyles().root}>
			<Stack sx={footerStyles().contentContainer}>
				<Links />
				<YandexMap />
			</Stack>
			<Copyright />
		</Box>
	)
}

export default FooterPage

import { Copyright, Links, YandexMap } from '@/components'
import { Box, Stack } from '@mui/material'
import { footerStyles } from '@/components'

const Footer = () => {
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

export default Footer

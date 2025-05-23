import { Stack, Typography, Box, Link } from '@mui/material'
import { logoDark } from '@/assets'
import { footerStyles } from './styles'

export const Copyright = () => {
	const styles = footerStyles()

	return (
		<Stack
			direction='row'
			alignItems='center'
			sx={styles.copyrightContainer}
		>
			<Link
				href='https://haifisch.ru'
				target='_blank'
				rel='noopener noreferrer'
				display='flex'
			>
				<Box
					component='img'
					src={logoDark}
					alt='Логотип Haifisch'
					sx={styles.logo}
				/>
			</Link>
			<Typography color='secondary.contrastText' pl={2}>
				© 2025. Все права защищены
			</Typography>
		</Stack>
	)
}

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
				width={127}
				height={41}
			>
				<Box
					component='img'
					src={logoDark}
					alt='Логотип Haifisch'
					sx={{
						objectFit: 'contain',
						transition: 'all 0.3s ease',
					}}
				/>
			</Link>
			<Typography color='secondary.contrastText' pl={2}>
				© 2025. Все права защищены
			</Typography>
		</Stack>
	)
}

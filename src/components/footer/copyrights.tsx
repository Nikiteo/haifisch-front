import { logoDark } from '@/assets'
import { Link, Box, Stack, Typography } from '@mui/material'

export const Copyrights = () => {
	return (
		<Stack
			direction='row'
			alignItems='center'
			mt={9}
			sx={{ pl: { xs: 5, sm: 5, md: 6, lg: 6, xl: 25 } }}
		>
			<Link
				href='https://haifisch.ru'
				target='_blank'
				rel='noopener noreferrer'
				sx={{ display: 'flex', width: 127, height: 41 }}
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

import { logoDark } from '@/assets'
import { Link, Box, Stack, Typography } from '@mui/material'

export const Copyrights = () => {
	return (
		<Stack
			direction='row'
			alignItems='center'
			mt='auto'
			pl={{ xl: 25, lg: 6, md: 6, sm: 5, xs: 5 }}
		>
			<Link
				href='https://haifisch.ru'
				target='_blank'
				rel='noopener noreferrer'
				display='flex'
				width='127'
				height='41'
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

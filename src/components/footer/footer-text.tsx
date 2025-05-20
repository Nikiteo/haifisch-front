import { Box, Link, Stack, Typography, styled } from '@mui/material'

const StyledLink = styled(Link)(({ theme }) => ({
	position: 'relative',
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: '-3px',
		left: 0,
		width: '100%',
		height: '1px',
		backgroundColor: theme.palette.secondary.contrastText,
		transform: 'scaleX(0)',
		transformOrigin: 'bottom right',
		transition: 'transform 0.3s ease',
	},
	'&:hover': {
		'&::after': {
			transform: 'scaleX(1)',
			transformOrigin: 'bottom left',
		},
	},
}))

export const FooterText = () => {
	return (
		<Box
			pl={{ xl: 25, lg: 6, md: 6, sm: 5, xs: 5 }}
			sx={{
				width: { xl: '35%', lg: '40%' },
				mb: { xs: 5, sm: 5, md: 9, lg: 0, xl: 0 },
			}}
		>
			<Typography
				variant='h2'
				lineHeight='1'
				textTransform='uppercase'
				color='secondary.contrastText'
				mb={{ xl: 15, lg: 15, md: 12.5, sm: 11.5, xs: 10 }}
				mt={{ xl: 0, lg: 0, md: 20, sm: 15, xs: 12.5 }}
				sx={{
					fontSize: {
						xl: 34,
						lg: 28,
						md: 24,
						sm: 22,
						xs: 18,
					},
				}}
			>
				Наши контакты
			</Typography>
			<Stack gap={8} alignItems='flex-start'>
				<StyledLink
					variant='body1'
					href={'https://yandex.ru/maps/-/CHvwMO~c'}
					target='_blank'
					rel='noopener noreferrer'
					underline='none'
					sx={{ letterSpacing: 0 }}
					color='secondary.contrastText'
				>
					Адрес: г. Москва, ул.Артюхиной, д. 4
				</StyledLink>
				<StyledLink
					variant='body1'
					href='tel:+79851627394'
					target='_blank'
					rel='noopener noreferrer'
					underline='none'
					sx={{ letterSpacing: 0 }}
					color='secondary.contrastText'
				>
					Телефон: +7 985 162 73 94
				</StyledLink>
				<StyledLink
					variant='body1'
					href='mailto:haifisch-store@yandex.ru'
					target='_blank'
					rel='noopener noreferrer'
					underline='none'
					sx={{ letterSpacing: 0 }}
					color='secondary.contrastText'
				>
					Электронная почта: haifisch-store@yandex.ru
				</StyledLink>
			</Stack>
		</Box>
	)
}

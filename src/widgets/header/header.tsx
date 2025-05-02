import { logo } from '@/shared/assets'
import { NavMenu } from '@/features/navigation'
import { Button, Box, Link } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

export const Header = () => {
	const handleContactClick = useCallback(() => {
		window.location.href = 'tg://resolve?domain=@Haifisch_store'

		setTimeout(() => {
			window.open('https://t.me/@Haifisch_store', '_blank')
		}, 500)
	}, [])

	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<Box
			component='header'
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1100,
				bgcolor: 'background.paper',
				py: 3,
				px: 25,
				boxShadow: isScrolled ? 1 : 'none',
				transition: 'box-shadow 0.3s ease',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Link
				href='https://haifisch.ru'
				target='_blank'
				rel='noopener noreferrer'
				sx={{ lineHeight: 0 }}
			>
				<Box
					component='img'
					src={logo}
					alt='Логотип Haifisch'
					sx={{ width: 130, height: 33, objectFit: 'contain' }}
				/>
			</Link>

			<NavMenu />

			<Button
				variant='contact'
				onClick={handleContactClick}
				sx={{
					ml: 'auto',
				}}
			>
				Связаться с нами
			</Button>
		</Box>
	)
}

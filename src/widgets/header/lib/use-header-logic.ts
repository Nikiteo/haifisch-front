import { useCallback, useState, useEffect } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

export const useHeaderLogic = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	const handleContactClick = useCallback(() => {
		window.location.href = 'tg://resolve?domain=@Haifisch_store'
		setTimeout(() => {
			window.open('https://t.me/@Haifisch_store', '_blank')
		}, 3500)
	}, [])

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return {
		isDesktop,
		isDrawerOpen,
		isScrolled,
		handleContactClick,
		openDrawer: () => setIsDrawerOpen(true),
		closeDrawer: () => setIsDrawerOpen(false),
	}
}

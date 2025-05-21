import { useMediaQuery, useTheme } from '@mui/material'

import { useCallback, useState } from 'react'

export const useHeaderLogic = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	const handleContactClick = useCallback(() => {
		window.location.href = 'tg://resolve?domain=@Haifisch_store'
		setTimeout(() => {
			const a = document.createElement('a')
			a.href = 'https://t.me/Haifisch_store'
			a.target = '_blank'
			a.rel = 'noopener noreferrer'
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
		}, 3500)
	}, [])

	return {
		isDesktop,
		isDrawerOpen,
		handleContactClick,
		openDrawer: () => setIsDrawerOpen(true),
		closeDrawer: () => setIsDrawerOpen(false),
	}
}

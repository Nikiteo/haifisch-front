import { useMediaQuery, useTheme } from '@mui/material'

import { useCallback, useState } from 'react'

export const useHeaderLogic = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	const handleContactClick = useCallback(() => {
		window.location.href = 'tg://resolve?domain=@Haifisch_store'
		setTimeout(() => {
			window.open('https://t.me/@Haifisch_store', '_blank')
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

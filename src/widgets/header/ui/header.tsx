import { Box } from '@mui/material'
import { NavMenu } from '@/features/navigation'
import { useHeaderLogic } from '../lib/use-header-logic'
import { ContactButton } from './contact-button'
import { Logo } from './logo'
import { MobileDrawer } from './mobile-drawer'
import { MobileMenuButton } from './mobile-menu-button'
import { useScreenSize } from '@/shared'

export const Header = () => {
	const screenSize = useScreenSize()
	const { isXxl, isXl, isLg, isMd } = screenSize

	const logoSize = isXxl
		? 'xxl'
		: isXl
		? 'xl'
		: isLg
		? 'lg'
		: isMd
		? 'md'
		: 'sm'

	const padding = {
		py: isXxl ? 8 : isXl ? 6 : isLg ? 6 : isMd ? 5 : 4,
		px: isXxl ? 25 : isXl ? 6 : isLg ? 6 : isMd ? 5 : 5,
	}

	const isDesktop = isXxl || isXl || isLg

	const { isDrawerOpen, handleContactClick, openDrawer, closeDrawer } =
		useHeaderLogic()

	return (
		<Box
			component='header'
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1100,
				bgcolor: 'var(--color-main)',
				transition: 'all 0.3s ease',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				...padding,
			}}
		>
			<Logo size={logoSize} />

			{isDesktop ? (
				<>
					<NavMenu />
					<ContactButton onClick={handleContactClick} />
				</>
			) : (
				<MobileMenuButton onClick={openDrawer} />
			)}

			<MobileDrawer
				open={isDrawerOpen}
				onClose={closeDrawer}
				onContactClick={handleContactClick}
			/>
		</Box>
	)
}

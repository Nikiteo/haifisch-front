import { NavMenu } from '@/components/navigation'
import { useHeaderLogic } from '../use-header-logic'
import { ContactButton } from './contact-button'
import { Logo } from './logo'
import { MobileDrawer } from './mobile-drawer'
import { MobileMenuButton } from './mobile-menu-button'
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material'

export const Header = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
	const { isDrawerOpen, handleContactClick, openDrawer, closeDrawer } =
		useHeaderLogic()

	return (
		<AppBar
			position='fixed'
			sx={{
				boxShadow: 'none',
				bgcolor: 'primary.main',
				transition: 'all 0.3s ease',
				py: { xs: 4, sm: 5, md: 6, lg: 8, xl: 8 },
				px: { xs: 5, sm: 5, md: 6, lg: 6, xl: 25 },
			}}
		>
			<Toolbar
				variant='dense'
				disableGutters
				sx={{
					minHeight: 58,
					justifyContent: 'space-between',
				}}
			>
				<Logo />
				{isDesktop ? (
					<>
						<NavMenu />
						<ContactButton onClick={handleContactClick} />
					</>
				) : (
					<MobileMenuButton onClick={openDrawer} />
				)}
				<MobileDrawer open={isDrawerOpen} onClose={closeDrawer} />
			</Toolbar>
		</AppBar>
	)
}

import { NavMenu } from '@/features/navigation'
import { useHeaderLogic } from '../lib/use-header-logic'
import { ContactButton } from './contact-button'
import { Logo } from './logo'
import { MobileDrawer } from './mobile-drawer'
import { MobileMenuButton } from './mobile-menu-button'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

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
				py: { xs: 4, sm: 5, md: 6, lg: 6, xl: 6 },
				px: { xs: 5, sm: 5, md: 6, lg: 6, xl: 25 },
			}}
		>
			<Toolbar
				disableGutters
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
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

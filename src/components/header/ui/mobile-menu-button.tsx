import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'

export const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
	<IconButton
		disableRipple
		onClick={onClick}
		sx={{
			color: 'text.primary',
		}}
	>
		<MenuIcon />
	</IconButton>
)

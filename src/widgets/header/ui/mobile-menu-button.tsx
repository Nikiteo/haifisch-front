import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'

export const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
	<IconButton onClick={onClick}>
		<MenuIcon />
	</IconButton>
)

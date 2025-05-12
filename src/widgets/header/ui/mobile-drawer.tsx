import { Box, Drawer } from '@mui/material'
import { NavMenu } from '@/features/navigation'
import { ContactButton } from './contact-button'
import type { MobileDrawerProps } from '../model/constants'

export const MobileDrawer = ({
	open,
	onClose,
	onContactClick,
}: MobileDrawerProps) => (
	<Drawer anchor='right' open={open} onClose={onClose}>
		<Box sx={{ width: 250, p: 2 }}>
			<NavMenu vertical />
			<ContactButton
				onClick={onContactClick}
				variant='text'
				sx={{ mt: 2, width: '100%' }}
			/>
		</Box>
	</Drawer>
)

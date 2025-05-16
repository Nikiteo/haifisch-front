import { Box, Drawer, IconButton } from '@mui/material'
import { NavMenu } from '@/features/navigation'
import type { MobileDrawerProps } from '../model/constants'
import CloseIcon from '@mui/icons-material/Close'

export const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => (
	<Drawer
		anchor='right'
		open={open}
		onClose={onClose}
		slotProps={{
			paper: {
				sx: {
					bgcolor: 'primary.main',
				},
			},
		}}
	>
		<Box sx={{ width: 266 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					pt: 8,
					pr: 8,
				}}
			>
				<IconButton
					onClick={onClose}
					sx={{
						color: 'text.primary',
					}}
				>
					<CloseIcon />
				</IconButton>
			</Box>
			<Box sx={{ px: 8, pt: 2, pb: 21 }}>
				<NavMenu
					vertical
					itemProps={{
						sx: {
							fontFamily: '"Playfair Display", serif',
							fontSize: { xl: 18, lg: 16 },
							textTransform: 'uppercase',
						},
					}}
				/>
			</Box>
		</Box>
	</Drawer>
)

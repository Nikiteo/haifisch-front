import type { ContactButtonProps } from '../constants'
import { Button } from '@mui/material'

export const ContactButton = ({ onClick }: ContactButtonProps) => (
	<Button
		variant='contact'
		onClick={onClick}
		sx={{
			width: {
				sm: 164,
				md: 200,
				lg: 210,
				xl: 210,
			},
			height: {
				sm: 46,
				md: 54,
				lg: 58,
				xl: 58,
			},
			whiteSpace: 'nowrap',
		}}
	>
		Связаться с нами
	</Button>
)

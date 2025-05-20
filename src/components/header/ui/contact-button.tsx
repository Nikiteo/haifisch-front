import { Button } from '@mui/material'

import type { ContactButtonProps } from '../constants'

export const ContactButton = ({ onClick }: ContactButtonProps) => (
	<Button
		variant='contact'
		onClick={onClick}
		sx={{
			width: {
				sm: 164,
				md: 200,
				lg: 220,
				xl: 220,
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

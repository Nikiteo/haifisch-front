import type { ContactButtonProps } from '../model/constants'
import { Button } from '@mui/material'

export const ContactButton = ({
	onClick,
	variant = 'contact',
}: ContactButtonProps) => (
	<Button
		variant={variant}
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
			ml: variant === 'contact' ? 'auto' : 0,
			whiteSpace: 'nowrap',
		}}
	>
		Связаться с нами
	</Button>
)

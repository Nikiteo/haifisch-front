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
			ml: variant === 'contact' ? 'auto' : 0,
			whiteSpace: 'nowrap',
		}}
	>
		Связаться с нами
	</Button>
)

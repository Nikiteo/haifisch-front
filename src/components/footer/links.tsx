import { Typography, Stack, Box } from '@mui/material'
import { footerStyles, StyledFooterLink } from './styles'
import { CONTACT_LINKS } from './constants'

export const Links = () => {
	const styles = footerStyles()

	return (
		<Box sx={styles.linksContainer}>
			<Typography variant='h2' sx={styles.heading}>
				Наши контакты
			</Typography>
			<Stack gap={8} alignItems='flex-start'>
				{CONTACT_LINKS.map((link, index) => (
					<StyledFooterLink
						variant='body1'
						key={`${index}-${link.href}`}
						href={link.href}
						target='_blank'
						rel='noopener noreferrer'
					>
						{link.text}
					</StyledFooterLink>
				))}
			</Stack>
		</Box>
	)
}

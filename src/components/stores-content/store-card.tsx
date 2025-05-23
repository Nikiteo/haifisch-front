import { Box, Stack, Button, type SxProps, type Theme } from '@mui/material'
import { storeStyles } from './styles'

type StoreCardProps = {
	logo: string
	link: string
	alt: string
	sx?: SxProps<Theme>
}

export const StoreCard = ({ logo, link, alt, sx }: StoreCardProps) => {
	const styles = storeStyles()

	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			gap={8}
		>
			<Box component='img' src={logo} alt={alt} sx={sx} />
			<Button
				variant='catalog'
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				sx={styles.button}
			>
				Смотреть магазин
			</Button>
		</Stack>
	)
}

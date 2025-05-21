import { heroStyles, Heading, Text } from '@/components'
import { Box, useTheme } from '@mui/material'

export const HeroText = () => {
	const theme = useTheme()
	const styles = heroStyles(theme)

	return (
		<Box display='flex' flexDirection='column'>
			<Heading variant='h2'>Мастерская Haifisch –</Heading>
			<Heading variant='h2'>
				создаём уникальные предметы интерьера
			</Heading>
			<Text
				variant='body1'
				sx={styles.additionalText}
			>
				Наши изделия из{'\u00A0'}искусственного камня сочетают в
				{'\u00A0'}себе элегантность и{'\u00A0'}практичность. Каждый
				предмет имеет неповторимый природный узор и{'\u00A0'}текстуру и
				{'\u00A0'}станет ярким акцентом в{'\u00A0'}любом интерьере.
			</Text>
		</Box>
	)
}

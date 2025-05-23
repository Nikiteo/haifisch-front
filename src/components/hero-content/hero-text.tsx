import { heroStyles, Heading, Text } from '@/components'
import { Box, useTheme } from '@mui/material'

type HeroTextProps = {
	heading: string
	innerHeading: string
	text: string | React.ReactNode
	maxWidth: number
	indent?: {
		xl?: number | string
		lg?: number | string
	}
}

export const HeroText = ({
	heading,
	innerHeading,
	text,
	maxWidth,
	indent = {
		xl: '-187px',
		lg: '-155px',
	},
}: HeroTextProps) => {
	const theme = useTheme()
	const styles = heroStyles(theme)

	return (
		<Box display='flex' flexDirection='column'>
			<Box component='hgroup' maxWidth={maxWidth}>
				<Heading variant='h2'>{heading}</Heading>
				<Heading
					variant='h2'
					sx={{
						marginLeft: indent,
					}}
				>
					{innerHeading}
				</Heading>
			</Box>
			<Text variant='body1' sx={styles.additionalText}>
				{text}
			</Text>
		</Box>
	)
}

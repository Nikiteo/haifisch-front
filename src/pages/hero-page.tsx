import { useTheme, useMediaQuery, Box, Stack } from '@mui/material'
import { HeroText, HeroImage, heroStyles } from '@/components'
import { hero } from '@/assets'
import { useTranslation } from 'react-i18next'

const HeroPage = () => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.down('md'))
	const styles = heroStyles(theme)
	const { t } = useTranslation()

	return (
		<Box
			component='section'
			display='flex'
			flexDirection='column'
			sx={styles.section}
		>
			<Stack justifyContent='space-between' sx={styles.stack}>
				{!isSm && <Box width='50%' />}
				<Box sx={styles.textContainer}>
					<HeroText
						heading={t('hero.heading')}
						innerHeading={t('hero.inner-heading')}
						text={t('hero.text')}
						maxWidth={450}
					/>
				</Box>
			</Stack>
			<HeroImage src={hero} alt='Изделия из камня' />
		</Box>
	)
}

export default HeroPage

import { useTheme, useMediaQuery, Box, Stack } from '@mui/material'
import { HeroText, Paragraph, heroStyles, StoresImages } from '@/components'
import { useTranslation } from 'react-i18next'

const StoresPage = () => {
	const theme = useTheme()
	const isSm = useMediaQuery(theme.breakpoints.down('md'))
	const styles = heroStyles(theme)
	const { t } = useTranslation()

	return (
		<Box
			id='stores'
			component='section'
			display='flex'
			flexDirection='column'
			sx={styles.section}
		>
			<Stack justifyContent='space-between' sx={styles.stack}>
				{!isSm && <Box width='50%' />}
				<Box sx={styles.textContainer}>
					<HeroText
						heading={t('stores.heading')}
						innerHeading={t('stores.inner-heading')}
						text={<Paragraph />}
						maxWidth={550}
						indent={{
							xl: '-110px',
							lg: '-90px',
						}}
					/>
				</Box>
			</Stack>
			<StoresImages />
		</Box>
	)
}

export default StoresPage

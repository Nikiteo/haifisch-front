import { market, marketLogo, ozon, ozonLogo } from '@/assets'
import { Box, Stack } from '@mui/material'
import { storeStyles } from './styles'
import { StoreCard } from './store-card'

export const StoresImages = () => {
	const styles = storeStyles()

	const stores = [
		{
			background: market,
			logo: marketLogo,
			alt: 'Логотип Яндекс Маркет',
			link: 'https://market.yandex.ru/store--haifisch?businessId=6328344',
			logoStyle: styles.market,
		},
		{
			background: ozon,
			logo: ozonLogo,
			alt: 'Логотип Озон',
			link: 'https://www.ozon.ru/seller/haifisch-150026/products/?miniapp=seller_150026',
			logoStyle: styles.ozon,
		},
	]

	return (
		<Stack gap={5} direction='row' flexWrap='wrap'>
			{stores.map((store, index) => (
				<Box key={`${index}-${store.link}`} sx={styles.container}>
					<Box
						sx={{
							...styles.backgroundImage,
							backgroundImage: `url(${store.background})`,
						}}
					/>
					<StoreCard
						logo={store.logo}
						alt={store.alt}
						link={store.link}
						sx={store.logoStyle}
					/>
				</Box>
			))}
		</Stack>
	)
}

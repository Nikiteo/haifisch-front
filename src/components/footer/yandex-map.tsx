import { Box } from '@mui/material'
import {
	YMap,
	YMapDefaultSchemeLayer,
	YMapDefaultFeaturesLayer,
	YMapDefaultMarker,
	reactify,
} from '@/lib/ymaps'
import type { YMapLocationRequest } from 'ymaps3'

const LOCATION: YMapLocationRequest = {
	center: [37.736375, 55.703545],
	zoom: 17,
}

export const YandexMap = () => {
	return (
		<Box
			sx={{
				width: { xl: '65%', lg: '60%', md: '100%' },
				height: { xl: 544, lg: 500, md: 388, sm: 420, xs: 328 },
			}}
		>
			<YMap location={reactify.useDefault(LOCATION)}>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />
				<YMapDefaultMarker
					coordinates={reactify.useDefault([37.736375, 55.703545])}
					draggable={false}
					title='Haifisch'
					subtitle='Товары для интерьеров'
					iconName='malls'
					size='normal'
				></YMapDefaultMarker>
			</YMap>
		</Box>
	)
}

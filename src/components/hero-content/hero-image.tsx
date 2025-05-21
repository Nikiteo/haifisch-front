import { ImageContainer } from '@/components'
import { Box } from '@mui/material'

type HeroImageProps = {
	src: string
	alt: string
}

export const HeroImage = ({ src, alt }: HeroImageProps) => (
	<ImageContainer>
		<Box
			component='img'
			src={src}
			alt={alt}
			sx={{
				width: '100%',
				height: '100%',
				objectFit: 'cover',
			}}
		/>
	</ImageContainer>
)

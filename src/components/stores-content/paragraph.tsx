import { Link } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Paragraph = () => {
	const { t } = useTranslation()

	return (
		<>
			{t('stores.text')}
			<Link
				href='tel:+79851627394'
				sx={{ color: 'inherit', textDecoration: 'underline' }}
			>
				телефону.
			</Link>
		</>
	)
}

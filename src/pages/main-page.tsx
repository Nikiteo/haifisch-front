import { Header } from '@/widgets'
import styles from './main.module.css'
import { main } from '@/shared/assets'

const Main = () => (
	<main className={styles.main}>
		<Header />
		<section className={styles.container}>
			<div className={styles.textContent}>
				<h1 className={styles.subtitle}>
					изделия <span className={styles.subtitleSpan}>для </span>
					декора
					<br />
					<div className={styles.textRight}>
						<span className={styles.subtitleSpan}>из </span>
						искусственного камня
					</div>
				</h1>
				<p className={styles.offer}>
					Получите специальные предложения при оформлении заказа
					оптом. А также воплотите свои идеи и закажите продукцию по
					индивидуальной разработке.
				</p>
				<button className={styles.calatogBtn}>Каталог</button>
			</div>
			<div className={styles.imageWrapper}>
				<img
					src={main}
					alt='Изделия из искусственного камня'
					className={styles.image}
				/>
			</div>
		</section>
	</main>
)

export default Main

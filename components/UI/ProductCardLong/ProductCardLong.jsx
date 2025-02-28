'use client'
import CompareButton from '@/components/UI/CompareButton/CompareButton'
import FavoriteButton from '@/components/UI/FavoriteButton/FavoriteButton'
import styles from './ProductCardLong.module.scss'

export default function ProductCardLong({ robot }) {
	return (
		<div className={styles.card}>
			<a href={`/products/${robot.id}`} className={styles.cardContent}>
				<div className={styles.titleContainer}>
					<div className={styles.imageWrapper}>
						<img
							className={styles.robotImage}
							src={robot.mainImage}
							alt={robot.title}
						/>
					</div>
					<div className={styles.title}>{robot.title}</div>
				</div>

				<div className={styles.specsContainer}>
					<div className={styles.specsItem}>
						<img src='/images/icons/lenght.svg' />
						<div className={styles.textContainer}>
							<div className={styles.text}>Длина рук (мм)</div>
							<div className={styles.value}>{robot.armLength}</div>
						</div>
					</div>
					<div className={styles.specsItem}>
						<img src='/images/icons/weight.svg' alt='Грузоподъемность' />
						<div className={styles.textContainer}>
							<div className={styles.text}>Грузоподъемность (кг)</div>
							<div className={styles.value}>{robot.payloadRange}</div>
						</div>
					</div>
				</div>
			</a>
			<div className={styles.iconGroup}>
				<CompareButton robot={robot} />
				<FavoriteButton robot={robot} />
			</div>
		</div>
	)
}

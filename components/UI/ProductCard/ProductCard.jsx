'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './ProductCard.module.scss'

import CompareButton from '@/components/UI/CompareButton/CompareButton'
import FavoriteButton from '@/components/UI/FavoriteButton/FavoriteButton'
import useDeviceType from '../../../hooks/useDeviceType'

export default function ProductCard({ robot, theme, hoverCard = () => {} }) {
	const router = useRouter()
	const { isMobileView } = useDeviceType()
	const [isHovered, setIsHovered] = useState(false)

	const onHover = () => {
		hoverCard(true)
		setIsHovered(true)
	}

	const onLeave = () => {
		hoverCard(false)
		setIsHovered(false)
	}

	return (
		<div
			className={`${styles.card} ${styles[`${theme}Card`]}`}
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
			onClick={() => {
				if (isMobileView) router.push(`/products/${robot.id}`)
			}}
		>
			<div className={styles.cardHeader}>
				<div
					className={`${styles.imageWrapper} ${
						isHovered && styles.hoveredImageWrapper
					}`}
				>
					<img
						className={`${styles.robotImage} ${styles.mainImage}`}
						src={robot.mainImage}
						alt={robot.title}
						style={{ opacity: isHovered && robot.hoverImage ? 0 : 1 }}
					/>
					{robot.hoverImage && (
						<img
							className={`${styles.robotImage} ${styles.hoverImage}`}
							src={robot.hoverImage}
							alt={robot.title}
							style={{ opacity: isHovered ? 1 : 0 }}
						/>
					)}
				</div>
				<div className={styles.iconGroup}>
					<FavoriteButton robot={robot} isHovered={isHovered} />
					<CompareButton robot={robot} isHovered={isHovered} />
				</div>
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.title}>{robot.title}</div>
				<div className={styles.specsContainer}>
					<div className={styles.specsItem}>
						<img src='/images/icons/lenght.svg' />
						<div className={styles.textContainer}>
							<div className={styles.text}>Длина рук (мм)</div>
							<div className={styles.value}>{robot.armLength}</div>
						</div>
					</div>
					<div className={styles.specsItem}>
						<img src='/images/icons/weight.svg' />
						<div className={styles.textContainer}>
							<div className={styles.text}>Грузоподъемность (кг)</div>
							<div className={styles.value}>{robot.payloadRange}</div>
						</div>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					{isHovered ? (
						<a href={`/products/${robot.id}`} className={styles.detailsBtn}>
							Подробнее
						</a>
					) : (
						<div className={styles.emptyButton}></div>
					)}
				</div>
			</div>
			{/* <div className={styles.buttonContainer}>
				{isHovered ? (
					<a href={`/products/${robot.id}`} className={styles.detailsBtn}>
						Подробнее
					</a>
				) : (
					<div className={styles.emptyButton}></div>
				)}
			</div> */}
		</div>
	)
}

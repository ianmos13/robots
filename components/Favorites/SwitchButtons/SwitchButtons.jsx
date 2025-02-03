'use client'
import styles from './SwitchButtons.module.scss'
import React from 'react'

export default function SwitchButtons({handlePrev, handleNext}) {
	const [activeButton, setActiveButton] = React.useState("");
	return (
		<div className={styles.containerButton}>
			<button
				className={`${styles.prevButton} ${styles.navButton} ${
					activeButton === 'prev' ? styles.active : ''
				}`}
				onClick={handlePrev}
			>
				<img
					src={
						activeButton === 'prev'
							? '/images/icons/active-prev.svg'
							: '/images/icons/prev.svg'
					}
					alt='Previous'
				/>
			</button>
			<button
				className={`${styles.nextButton} ${styles.navButton} ${
					activeButton === 'next' ? styles.active : ''
				}`}
				onClick={handleNext}
			>
				<img
					src={
						activeButton === 'next'
							? '/images/icons/active-next.svg'
							: '/images/icons/next.svg'
					}
					alt='Next'
				/>
			</button>
		</div>
	)
}

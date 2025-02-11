'use client'
import styles from './SwitchButtons.module.scss'
import React from "react";

export default function SwitchButtons({
	activeButton,
	handlePrev,
	handleNext,
}) {
	return (
		<div className={styles.containerButton}>
			<button
				className={styles.arrowLeft}
				onClick={handlePrev}
			>
				<svg className={styles.icon} />
			</button>
			<button
				className={styles.arrowRight}
				onClick={handleNext}
			>
				<svg className={styles.icon} />
			</button>
		</div>
	)
}

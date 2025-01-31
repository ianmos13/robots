'use client'

import { useState } from 'react'
import styles from './DownloadDetailsButton.module.scss'

export default function DownloadDetailsButton({ text }) {
	const [isMouseLeaved, setIsMouseLeaved] = useState(false)

	return (
		<div
			className={`${styles.container} ${isMouseLeaved ? styles.unhovered : ''}`}
			onMouseEnter={() => setIsMouseLeaved(false)}
			onMouseLeave={() => setIsMouseLeaved(true)}
		>
			{text && <div className={styles.textContainer}>{text}</div>}
			<div className={styles.imageContainer}>
				<img
					src='/images/icons/download-icon-blue.svg'
					alt='download'
					className={styles.icon}
				/>
			</div>
		</div>
	)
}

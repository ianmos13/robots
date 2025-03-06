'use client'

import { useState } from 'react'
import styles from './DownloadDetailsButton.module.scss'
import Link from 'next/link'

export default function DownloadDetailsButton({ text }) {
	const [isMouseLeaved, setIsMouseLeaved] = useState(false)

	return (
		<Link
			className={`${styles.container} ${isMouseLeaved ? styles.unhovered : ''}`}
			onMouseEnter={() => setIsMouseLeaved(false)}
			onMouseLeave={() => setIsMouseLeaved(true)}
			href="/data/Карточка Предприятия ООО СМТ.docx"
		>
			{text && <div className={styles.textContainer}>{text}</div>}
			<div className={styles.imageContainer}>
				<img
					src='/images/icons/download-icon-blue.svg'
					alt='download'
					className={styles.icon}
				/>
			</div>
		</Link>
	)
}

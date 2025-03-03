"use client"

import styles from './DropdownElement.module.scss'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function DropdownElement(props) {

	const { theme, element, isOpen, handleClick } = props
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(true)
	}, []);

	return (
		<div
			className={`${styles.container} ${styles[`${theme}Container`]}`}
			onClick={() => handleClick(element.ref) }
		>
			<div className={`${styles.headerLink} ${isOpen ? styles.active : '' }`}>
				<span>{element.name}</span>
				<div className={styles.iconContainer}>
					<svg className={styles.icon} />
				</div>
			</div>
			{ready && (
				<div className={`${styles.dropdownMenuWrapper} ${isOpen ? styles.active : '' }`}>
					<ul className={`${styles.dropdownMenu} ${isOpen ? styles.active : '' }`}>
						{ element.children.map((child, idx) => (
							<li key={idx} className={`${styles.dropdownElement} ${child.allLink ? styles.allLinkElement : '' }`} >
								{child.allLink && (
									<div className={styles.imageContainer} >
										<img
											loading="lazy"
											src={child.image}
											alt={child.name}
											className={styles.icon}
										/>
									</div>
								)}
								<Link
									href={child.link}
									className={styles.link}
								>
									<span>{child.name}</span>
								</Link>
							</li>
						))}
						<li className={styles.lastElement} ></li>
					</ul>
				</div>
			)}
		</div>
	)
}

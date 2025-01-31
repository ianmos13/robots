"use client";

import styles from './MenuElement.module.scss'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function MenuElement(props) {
    const { element, isOpen, handleClickMenu } = props

    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true)
    }, []);

    return (
        <div
            className={styles.container}
            onClick={() => handleClickMenu(element.ref) }
        >
            {element.children ? (
                <>
                    <div className={styles.link} >
                        <span>{element.title}</span>
                    </div>
                    {ready && (
                        <div className={`${styles.dropdownMenuWrapper} ${isOpen ? styles.active : '' }`}>
                            <ul className={`${styles.dropdownMenu} ${isOpen ? styles.active : '' }`}>
                                { element.children.map((child, idx) => (
                                    <li key={idx} className={styles.dropdownElement} >
                                        <Link
                                            href={child.link}
                                            className={styles.link}
                                        >
                                            {child.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                <Link
                    className={styles.link}
                    href={element.link}
                >
                    {element.title}
                </Link>
            )}
        </div>
    )
}

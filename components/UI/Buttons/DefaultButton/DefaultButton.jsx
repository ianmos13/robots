"use client";

import styles from './DefaultButton.module.scss';

export default function DefaultButton({ theme, text, onClick }) {
    return (
        <div
            className={`${styles.buttonContainer} ${styles[`${theme}Container`]}`}
            onClick={onClick}
        >
            <span className={styles.text}>
                {text}
            </span>
        </div>
    );
}

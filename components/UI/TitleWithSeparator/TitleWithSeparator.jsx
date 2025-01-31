"use client";
import styles from "./TitleWithSeparator.module.scss";

export default function TitleWithSeparator({ title, addButton, text, onClick }) {
  return (
    <>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        {addButton && (
          <div className={styles.addButton}>
            <button onClick={onClick}>{addButton}</button>
          </div>
        )}
        {text && (
          <div className={styles.text}>{text}</div>
        )}
      </div>
      <div className={styles.separator}></div>
    </>
  );
}
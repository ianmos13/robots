"use client";
import styles from "./TitleWithSeparator.module.scss";
import PdfButton from "@/components/UI/Buttons/PdfButton/PdfButton";

export default function TitleWithSeparator({ theme, title, addButton, text, onClick }) {
  return (
    <>
      <div className={`${styles.header} ${styles[`${theme}Header`]}`}>
        <h2 className={styles.title}>{title}</h2>
        {addButton || theme === "indexWithButton" ? (
          <div className={styles.buttonsArea}>
            {theme === "indexWithButton" && (
              <div className={styles.pdfButton}>
                <PdfButton theme="index" pdfName={'pdfName'} />
              </div>
            )}
            {addButton && (
              <div className={styles.addButton}>
                <button onClick={onClick}>{addButton}</button>
                <div className={styles.mobileArrow} onClick={onClick}>
                    <svg className={styles.icon} />
                </div>
              </div>
            )}
          </div>
        ) : null}
        {text && (
          <div className={styles.text}>{text}</div>
        )}
      </div>
      <div className={`${styles.separator} ${styles[`${theme}Separator`]}`}></div>
    </>
  );
}
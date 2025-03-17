import styles from './PdfButton.module.scss';

export default function PdfButton({ theme, pdfName }) {
  return (
    <a 
      href="/data/katalog_сентябрь_вэб.pdf" 
      download
      className={`${styles.pdfBtn} ${styles[`${theme}Btn`]}`}
    >
      <span>PDF&nbsp;каталог</span>
      <img
        src="/images/icons/download.svg"
        alt="download"
        className={styles.pdfIcon}
      />
    </a>
  );
}

import styles from './PdfButton.module.scss';

export default function PdfButton({ pdfName }) {

  return (
    <a href="/" className={styles.pdfBtn}>
      <span>PDF каталог</span>
      <img
        src="/images/icons/download.svg"
        alt="download"
        className={styles.pdfIcon}
      />
    </a>
  );
}

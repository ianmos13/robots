
import styles from './CatalogButton.module.scss';

export default function CatalogButton(props) {
  const { isOpenCatalog, openCatalog} = props


  return (
    <div
        className={`${styles.container} ${isOpenCatalog ? styles.clicked : ''}`}
        onClick={openCatalog}
    >
        <div className={styles.buttonContainer} >
            <div className={styles.imageContainer} >
              <img
                src="/images/icons/menu.svg"
                alt="menu open"
                className={styles.icon}
              />
            </div>
            <span className={styles.text}>
                Каталог роботов
            </span>
        </div>
        <div className={`${styles.buttonContainer} ${styles.buttonCloseContainer}`} >
            <div className={styles.imageContainer} >
                <img
                    src="/images/icons/x-white.svg"
                    alt="menu close"
                    className={styles.icon}
                />
            </div>
            <span className={styles.text}>
                 Закрыть
            </span>
        </div>
    </div>
  );
}

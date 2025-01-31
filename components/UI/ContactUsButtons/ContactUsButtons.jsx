import styles from "./ContactUsButtons.module.scss";

export default function ContactUsButtons(props) {
  const { theme } = props

  return (
    <section className={`${styles.container} ${styles[`${theme}Container`]}`}>
      <div className={styles.phone} href="tel:84992885394">
        8 499 288 5394{" "}
      </div>

      <div className={styles.social}>
        <a
          className={styles.telegram}
          href="https://t.me/your_telegram_link"
          target="_blank"
          rel="noopener noreferrer"
        >
            {theme === "contacts" && (<img src="/images/icons/tg-icon.svg" alt="Telegram" />)}
            {theme === "footer" && (<img src="/images/icons/tg-icon-white.svg" alt="Telegram" />)}
            {theme === "header" && (<img src="/images/icons/tg-icon-blue.svg" alt="Telegram" />)}
        </a>

        <img className={styles.separator} src="/images/icons/separator.svg" alt="Separator" />

        <a
          href="whatsapp://chat?number=84992885394"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
            {theme === "contacts" && (<img src="/images/icons/whatsapp-icon.svg" alt="Whatsapp" />)}
            {theme === "footer" && (<img src="/images/icons/whatsapp-icon-white.svg" alt="Whatsapp" />)}
            {theme === "header" && (<img src="/images/icons/whatsapp-icon-blue.svg" alt="Whatsapp" />)}
        </a>
      </div>
    </section>
  );
}
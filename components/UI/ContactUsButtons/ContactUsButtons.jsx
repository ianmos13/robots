import { useState, useEffect } from "react";
import styles from "./ContactUsButtons.module.scss";

export default function ContactUsButtons(props) {
  const { theme } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={`${styles.container} ${styles[`${theme}Container`]}`}>
      <a className={styles.phone} href="tel:84992885394">
        8 499 288 5394
      </a>

      <div className={styles.social}>
        {theme === "header" && isMobile ? (
          <a
            className={styles.telegram}
            href="tel:84992885394"
            rel="noopener noreferrer"
          >
            <img src="/images/icons/mobile-phone.png" alt="Phone" />
          </a>
        ) : (
          <a
            className={styles.telegram}
            href="https://t.me/crprobot_manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            {theme === "contacts" && (
              <img src="/images/icons/tg-icon.svg" alt="Telegram" />
            )}
            {theme === "footer" && (
              <img src="/images/icons/tg-icon-white.svg" alt="Telegram" />
            )}
            {theme === "header" && (
              <img src="/images/icons/tg-icon-blue.svg" alt="Telegram" />
            )}
          </a>
        )}

        <img className={styles.separator} src="/images/icons/separator.svg" alt="Separator" />

        <a
          href="https://wa.me/79850920638?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
          {theme === "contacts" && (
            <img src="/images/icons/whatsapp-icon.svg" alt="Whatsapp" />
          )}
          {theme === "footer" && (
            <img src="/images/icons/whatsapp-icon-white.svg" alt="Whatsapp" />
          )}
          {theme === "header" && (
            <img src="/images/icons/whatsapp-icon-blue.svg" alt="Whatsapp" />
          )}
        </a>
      </div>
    </section>
  );
}

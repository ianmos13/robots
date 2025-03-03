import styles from "./ContactsBlock.module.scss";

export default function Contacts() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1>КОНТАКТЫ</h1>
      </div>
      <section className={styles.container}>
        <div className={styles.tileContainer}>
          <div className={styles.tile}>
            <div className={styles.header}>Отдел продаж</div>
            <div className={styles.infoContainer}>
              <div className={styles.buttonsContainer}>
                <div className={styles.button}>
                  <a
                    href="https://t.me/crprobot_manager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.telegram}>
                    <img src="/images/icons/tg-icon-blue.svg" alt="Telegram" />
                  </a>
                </div>
                <div className={styles.button}>
                  <a
                    href="whatsapp://chat?number=89850920638"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsapp}>
                    <img
                      src="/images/icons/whatsapp-icon-blue.svg"
                      alt="WhatsApp"
                    />
                  </a>
                </div>
              </div>
              <a className={styles.text} href="tel:84994747945">
                8 499 474 7945
              </a>
              <a className={styles.text} href="mailto:info@crp-robot.ru">
                info@crp-robot.ru
              </a>
              <p className={styles.text}>Одинцово, Можайское ш., 8</p>
            </div>
          </div>
          <div className={styles.tile}>
            <div className={styles.header}>Постпродажное обслуживание</div>
            <div className={styles.infoContainer}>
              <div className={styles.buttonsContainer}>
                <div className={styles.button}>
                  <a
                    href="https://t.me/79957858588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.telegram}>
                    <img src="/images/icons/tg-icon-blue.svg" alt="Telegram" />
                  </a>
                </div>
                <div className={styles.button}>
                  <a
                    href="whatsapp://chat?number=79957858588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsapp}>
                    <img
                      src="/images/icons/whatsapp-icon-blue.svg"
                      alt="WhatsApp"
                    />
                  </a>
                </div>
				
              </div>
              <a className={styles.text} href="tel:79957858588">
                7 995 785 8588
              </a>

              <a className={styles.text} href="mailto:s.shershnev@crp-robot.ru">
                s.shershnev@crp-robot.ru
              </a>
              <p className={styles.text}>Одинцово, Можайское ш., 8</p>
            </div>
          </div>
          <div className={styles.tile}>
            <div className={styles.header}>Техническая поддержка</div>
            <div className={styles.infoContainer}>
              <div className={styles.buttonsContainer}>
                <div className={styles.button}>
                  <a
                    href="https://t.me/crobotp_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.telegram}>
                    <img src="/images/icons/tg-icon-blue.svg" alt="Telegram" />
                  </a>
                </div>
                <div className={styles.button}>
                  <a
                    href="whatsapp://chat?number=79057414433"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsapp}>
                    <img
                      src="/images/icons/whatsapp-icon-blue.svg"
                      alt="WhatsApp"
                    />
                  </a>
                </div>
				
              </div>
			  <a className={styles.text} href="mailto:s.tech@crp-robot.ru">
			  tech@crp-robot.ru
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

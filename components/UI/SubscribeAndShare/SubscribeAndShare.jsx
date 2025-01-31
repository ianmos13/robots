import styles from "./SubscribeAndShare.module.scss";
export default function SubscribeAndShare() {
  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.title}>
        Подпишитесь на нашу рассылку, чтобы быть в курсе важных событий
      </div>
      <div className={styles.mailCOntainer}>
      <input
        type="email"
        placeholder="Ваш E-mail"
        className={styles.input}
      />
        <div className={styles.subscribe}>Подписаться</div>
      </div>
      <div  className={styles.info}>
        Нажимая кнопку подписаться, вы соглащаетесь у словиями{" "}
        <a>пользовательского соглашения</a>
        <div className={styles.shareContainer}>
          <div className={styles.titel}>Поделиться статьей:</div>
          <div className={styles.icons}>
            <div>
              <img src="/images/icons/tg.svg" />
            </div>
            <div>
            <img src="/images/icons/vk.svg" />
            </div>
            <div>
            <img src="/images/icons/ok.svg" />
            </div>

            <div>
            <img src="/images/icons/share.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

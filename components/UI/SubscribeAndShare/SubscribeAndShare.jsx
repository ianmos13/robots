import { useState } from "react";
import styles from "./SubscribeAndShare.module.scss";

export default function SubscribeAndShare() {
  const [copied, setCopied] = useState(false);
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Ошибка копирования ссылки:", err);
      });
  };

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
      <div className={styles.info}>
        <div className={styles.agreement}>
          Нажимая кнопку подписаться, вы соглашаетесь с условиями{" "}
          <a
            href="/user-agreement"
            target="_blank"
            rel="noopener noreferrer"
          >
            пользовательского соглашения
          </a>
        </div>
        <div className={styles.shareContainer}>
          <div className={styles.titel}>Поделиться статьей:</div>
          <div className={styles.icons}>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/icons/tg.svg"
                alt="Поделиться через Telegram"
              />
            </a>
            <a
              href={`https://vk.com/share.php?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icons/vk.svg" alt="Поделиться через VK" />
            </a>
            <a
              href={`https://connect.ok.ru/offer?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/icons/ok.svg"
                alt="Поделиться через Одноклассники"
              />
            </a>
            <div onClick={handleCopyLink} style={{ cursor: "pointer" }}>
              <img src="/images/icons/share.svg" alt="Скопировать ссылку" />
              {/* {copied && (
                <span style={{ color: "green", marginLeft: "5px" }}>
                  Ссылка скопирована!
                </span>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

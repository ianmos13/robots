
"use client"
import { useState, useEffect } from "react";
import styles from "./CookieModal.module.scss";
import Link from 'next/link'

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieModal}>
      <p>
        Мы используем  <span>файлы</span> <Link href="/cookie-policy">cookie</Link> <span>для улучшения работы сайта</span>
      </p>
      <button onClick={acceptCookies}>Принять</button>
    </div>
  );
};

export default CookieModal;

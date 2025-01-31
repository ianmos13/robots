"use client";
import { useState } from "react";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ robot }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardHeader}>
        <div className={styles.imageWrapper}>
          <img
            className={`${styles.robotImage} ${styles.mainImage}`}
            src={robot.mainImage}
            alt={robot.title}
            style={{ opacity: isHovered && robot.hoverImage ? 0 : 1 }}
          />
          {robot.hoverImage && (
            <img
              className={`${styles.robotImage} ${styles.hoverImage}`}
              src={robot.hoverImage}
              alt={robot.title}
              style={{ opacity: isHovered ? 1 : 0 }}
            />
          )}
        </div>
        <div className={styles.iconGroup}>
          <button className={styles.iconBtn}>
            <img src="/images/icons/favorite.svg" alt="Избранное" />
          </button>
          <button className={styles.iconBtn}>
            <img src="/images/icons/compare.svg" alt="Сравнить" />
          </button>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.title}>{robot.title}</div>
        <div className={styles.specsContainer}>
          <div className={styles.specsItem}>
            <img src="/images/icons/lenght.svg" />
            <div className={styles.textContainer}>
              <div className={styles.text}>Длина рук (мм)</div>
              <div className={styles.value}>{robot.armLength}</div>
            </div>
          </div>
          <div className={styles.specsItem}>
            <img src="/images/icons/weight.svg" />{" "}
            <div className={styles.textContainer}>
              <div className={styles.text}>Грузоподъемность</div>
              <div className={styles.value}>{robot.payloadRange}</div>
            </div>
          </div>
        </div>
      </div>

      {isHovered && (
        <div className={styles.buttonContainer}>
          <a href={`/products/${robot.id}`} className={styles.detailsBtn}>Подробнее</a>
        </div>
      )}
    </div>
  );
}

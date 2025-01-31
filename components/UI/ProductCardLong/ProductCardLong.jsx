"use client";
import { useState } from "react";
import styles from "./ProductCardLong.module.scss";

export default function ProductCardLong({ robot }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <a  href={`/products/${robot.id}`} className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.robotImage}
            src={robot.mainImage}
            alt={robot.title}
          />
        </div>

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
            <img src="/images/icons/weight.svg" alt="Грузоподъемность" />
            <div className={styles.textContainer}>
              <div className={styles.text}>Грузоподъемность (кг)</div>
              <div className={styles.value}>{robot.loadCapacity}</div>
            </div>
          </div>
        </div>
        <div className={styles.iconGroup}>
          <button className={styles.iconBtn}>
            <img src="/images/icons/favorite.svg" alt="Избранное" />
          </button>
          <button className={styles.iconBtn}>
            <img src="/images/icons/compare.svg" alt="Сравнить" />
          </button>
        </div>
      </a>
    </div>
  );
}

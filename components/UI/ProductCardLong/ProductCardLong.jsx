"use client";
import CompareButton from "@/components/UI/CompareButton/CompareButton";
import FavoriteButton from "@/components/UI/FavoriteButton/FavoriteButton";
import styles from "./ProductCardLong.module.scss";
import { getProductUrl } from "@/utils/getProductUrl";
import Link from "next/link";

export default function ProductCardLong({ robot, categories }) {
  const productUrl = getProductUrl(robot, categories);
  const isPositioner = productUrl.includes("pozicionery");
  return (
    <div className={styles.card}>
      <Link href={productUrl} className={styles.cardContent}>
        <div className={styles.titleContainer}>
          <div className={styles.imageWrapper}>
            <img
              loading="lazy"
              className={styles.robotImage}
              src={robot.mainImage}
              alt={robot.title}
            />
          </div>
          <div className={styles.title}>
            <h2>{robot.title}</h2>
          </div>
        </div>

        <div className={styles.specsContainer}>
          <div className={styles.specsItem}>
            <img src="/images/icons/lenght.svg" />
            <div className={styles.textContainer}>
			<div className={styles.text}>{isPositioner ? "Размер" : "Длина руки (мм)"}</div>
              <div className={styles.value}>{robot.armLength}</div>
            </div>
          </div>
          <div className={styles.specsItem}>
            <img src="/images/icons/weight.svg" alt="Грузоподъемность" />
            <div className={styles.textContainer}>
              <div className={styles.text}>Грузоподъемность (кг)</div>
              <div className={styles.value}>{robot.payloadRange}</div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.iconGroup}>
        <CompareButton robot={robot} />
        <FavoriteButton robot={robot} />
      </div>
    </div>
  );
}

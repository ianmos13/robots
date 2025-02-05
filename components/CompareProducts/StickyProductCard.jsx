"use client";
import styles from "./CompareProducts.module.scss";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";

export default function StickyProductCard({ item, onRemove }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardImg}>
        <img
          src={item.mainImage}
          alt={item.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.productTitle}>{item.title}</div>
        <div className={styles.cardIcons}>
          <div className={styles.btn}>
            <FavoriteButton robot={item} />
          </div>
          <div className={styles.btn}>
            <img
              src="/images/icons/trash.svg"
              className={styles.trashIcon}
              alt="trash"
              onClick={onRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

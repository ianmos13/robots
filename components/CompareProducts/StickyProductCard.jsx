"use client";
import styles from "./CompareProducts.module.scss";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import {getProductUrl} from "@/utils/getProductUrl";
import Link from 'next/link';
export default function StickyProductCard({ item, categories }) {
  const productUrl = getProductUrl(item, categories)
  return (
      <Link
          className={styles.productCard}
          href={productUrl}
      >
      <div className={styles.cardImg}>
        <img
          loading="lazy"
          src={item.mainImage}
          alt={item.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.productTitle}>{item.title}</div>
        {/* <div className={styles.cardIcons}>
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
        </div> */}
      </div>
    </Link>
  );
}

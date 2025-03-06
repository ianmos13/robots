"use client";
import styles from "./CompareProducts.module.scss";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import {getProductUrl} from "@/utils/getProductUrl";
import Link from 'next/link'

export default function ProductCard({ item, categories, onRemove }) {
  const productUrl = getProductUrl(item, categories)
  return (
    <div className={styles.productCard} >
      <div className={styles.cardIcons}>
        <div className={styles.favoriteIcon}>
          <FavoriteButton robot={item} small={true}/>
        </div>
        <div className={styles.trashIcon}>
            <img
              loading="lazy"
              src="/images/icons/trash.svg"
              alt="trash"
              onClick={onRemove}
            />
        </div>
      </div>
      <Link href={productUrl}>
          <div className={styles.productImage}>
           <img
               loading="lazy"
               src={item.mainImage}
               alt={item.title}
          />
          </div>
          <div className={styles.productTitle}>{item.title}</div>
      </Link>
    </div>
  );
}

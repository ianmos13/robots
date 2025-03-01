"use client";
import styles from "./CompareProducts.module.scss";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";

export default function ProductCard({ item, onRemove }) {
  return (
    <a
        className={styles.productCard}
        href={`/products/${item.id}`}
    >
      <div className={styles.cardIcons}>
        <div className={styles.favoriteIcon}>
          <FavoriteButton robot={item} small={true}/>
        </div>
        <img
          src="/images/icons/trash.svg"
          className={styles.trashIcon}
          alt="trash"
          onClick={onRemove}
        />
      </div>
     <div  className={styles.productImage}>
     <img
        src={item.mainImage}
        alt={item.title}
       
      />
     </div>
      <div className={styles.productTitle}>{item.title}</div>
    </a>
  );
}

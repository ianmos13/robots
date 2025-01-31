"use client";
import React, { useState } from "react";
import styles from "./ProductSlider.module.scss";

export default function ProductSlider({ images, productInfo }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const [isInComparison, setIsInComparison] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handleComparisonClick = () => {
    setIsInComparison((prev) => !prev);
  };

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className={styles.productSlider}>
    
      <div className={styles.imageContainer}>
        <img
          src={images[currentImageIndex]}
          alt="Product"
          className={styles.mainImage}
        />
        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${
                index === currentImageIndex ? styles.active : ""
              }`}
              onClick={() => handleImageChange(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

   
      <div className={styles.productInfo}>
        <h3>{productInfo.title}</h3>

     
        <div className={styles.advantagesContainer}>
          {productInfo.advantages.map((advantage, index) => (
            <div className={styles.advantage} key={index}>
              {advantage}
            </div>
          ))}
        </div>

        <div className={styles.infoContainer}>
         
          <div className={styles.assignmentContainer}>
            <div className={styles.assignmentTitle}>Назначение:</div>
            {productInfo.assignment.map((item, index) => (
              <div className={styles.assignment} key={index}>
                {item}
              </div>
            ))}
          </div>

         
          <div className={styles.specContainer}>
            <div className={styles.specTitle}>Длина рук (мм):</div>
            <div className={styles.specValue}>{productInfo.armLength}</div>
          </div>

      
          <div className={styles.capabilityContainer}>
            <div className={styles.capabilityTitle}>Грузоподъемность (кг):</div>
            <div className={styles.capabilityValue}>
              {productInfo.payloadRange}
            </div>
          </div>

          <div className={styles.sourceContainer}>
            <div className={styles.sourceTitle}>Источник:</div>
            <div className={styles.sourceGrid}>
              {productInfo.source.map((src, index) => (
                <div className={styles.source} key={index}>
                  {src}
                </div>
              ))}
            </div>
          </div>
        </div>

    
        <div className={styles.btnContainer}>
          <button className={styles.ctaButton}>
            Получить коммерческое предложение
          </button>

          <div className={styles.btnContainerInner}>
           
            <div
              className={`${styles.compereBtn} ${
                isInComparison ? styles.activeBtn : ""
              }`}
              onClick={handleComparisonClick}
            >
              {
             
                !isInComparison && (
                  <img
                    src="/images/icons/bar-chart.svg"
                    alt="Compare Icon"
                    className={styles.compareIcon}
                  />
                )
              }
              {isInComparison
                ? "Товар добавлен в сравнения"
                : "Сравнить с другим товаром"}
            </div>

           
            <div
              className={`${styles.favoriteBtn} ${
                isFavorite ? styles.activeBtn : ""
              }`}
              onClick={handleFavoriteClick}
            >
              <img
                src={
                  isFavorite
                    ? "/images/icons/heart-active.svg"
                    : "/images/icons/heart.svg"
                }
                alt="Favorite Icon"
              />
              {isFavorite ? "Добавлен" : "В избранные"}
            </div>

          
            <div className={styles.social}>
              <a
                href="https://t.me/your_telegram_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/icons/tg-icon.svg" alt="Telegram" />
              </a>

              <img src="/images/icons/separator.svg" alt="Separator" />

              <a
                href="whatsapp://chat?number=84992885394"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/icons/whatsapp-icon.svg" alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

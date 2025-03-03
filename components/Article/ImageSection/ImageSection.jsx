import React, { useState } from "react";
import styles from "./ImageSection.module.scss";
import {normalizeUrl} from "@/utils/normalizeUrl";

export default function ImageSection({ imgSrc }) {
  let images = [];
  if (Array.isArray(imgSrc)) {
    images = imgSrc;
  } else if (imgSrc) {
    images = [imgSrc];
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.imgContainer}>
      <img loading="lazy" className={styles.sliderItem} src={normalizeUrl(images[currentIndex])} alt="" />
      {images.length > 1 && (
        <>
          <button
            className={`${styles.navButton} ${styles.left}`}
            onClick={prevSlide}
          >
            <img src="/images/icons/prev-arrow-white.svg" alt="prev" />
          </button>
          <button
            className={`${styles.navButton} ${styles.right}`}
            onClick={nextSlide}
          >
            <img src="/images/icons/next-arrow-white.svg" alt="next" />
          </button>
        </>
      )}
    </div>
  );
}

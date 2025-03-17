"use client";
import React, { useRef } from "react";
import CategoriesFilter from "@/components/UI/CategoriesFilter/CategoriesFilter";
import styles from "./CompareProducts.module.scss";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";

export default function CompareHeader({
  comparisons,
  currentIndex,
  maxVisibleItems,
  onScrollLeft,
  onScrollRight,
  sliderRef,
  onRemoveItem,
  categoryList,
}) {

  const touchStartXRef = useRef(null);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;
    const threshold = 50;
    if (deltaX > threshold) {
      onScrollRight();
    } else if (deltaX < -threshold) {
      onScrollLeft();
    }
    touchStartXRef.current = null;
  };

  return (
    <div className={styles.compareWrapper}>
      <div className={styles.compareContainer}>
        <div
          className={styles.productsSlider}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {comparisons
            .slice(currentIndex, currentIndex + maxVisibleItems)
            .map((item, index) => (
              <div key={index} className={styles.sliderProductCard}>
                <ProductCard
                  categories={categoryList}
                  item={item}
                  onRemove={() => onRemoveItem(item.id)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

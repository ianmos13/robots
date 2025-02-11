"use client";
import { useRef } from "react";
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
  onClearComparison,
  sliderRef,
  onRemoveItem,
  onRemoveCategory,
  categoryList,
  onDownloadExcel,
}) {
  const categoryKeys = new Set(comparisons.map((item) => item.category));
  const router = useRouter();
  const uniqueCategories = categoryList.filter((category) =>
    categoryKeys.has(category.key)
  );
  const goToCatalogPage = () => {
    router.push("/catalog");
  };

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
      <div className={styles.header}>
        <div className={styles.leftConainer}>
          <h3>Сравнение товаров</h3>
          <CategoriesFilter
            categories={uniqueCategories}
            onDelete={onRemoveCategory}
          />
          <div className={styles.btnContaierMobile}>
            <button className={styles.downloadButton} onClick={onDownloadExcel}>
              <img src="/images/icons/download.svg" alt="download" />
              <span>Скачать таблицу</span>
            </button>
            <button className={styles.addButton}>
              <img
                src="/images/icons/plus.svg"
                alt="add"
                onClick={goToCatalogPage}
              />{" "}
              <span>Добавить товар</span>
            </button>
            {comparisons.length > 0 && (
              <button
                className={styles.clearButton}
                onClick={onClearComparison}
              >
                <img src="/images/icons/trash.svg" alt="trash" />
                <span>Удалить все </span>
              </button>
            )}
          </div>
        </div>
        <div>
          <div className={styles.rightContainer}>
            <div className={styles.btnContaier}>
              <button className={styles.downloadButton} onClick={onDownloadExcel}>
                <img src="/images/icons/download.svg" alt="download" />
                <span>Скачать таблицу</span>
              </button>
              <button className={styles.addButton}>
                <img
                  src="/images/icons/plus.svg"
                  alt="add"
                  onClick={goToCatalogPage}
                />{" "}
                <span>Добавить товар</span>
              </button>
              {comparisons.length > 0 && (
                <button
                  className={styles.clearButton}
                  onClick={onClearComparison}
                >
                  <img src="/images/icons/trash.svg" alt="trash" />
                  <span>Удалить все </span>
                </button>
              )}
            </div>
            {comparisons.length > maxVisibleItems && (
              <div className={styles.navControls}>
                <div className={styles.containerButton}>
                  <button
                    className={`${styles.prevButton} ${styles.navButton}`}
                    onClick={onScrollLeft}
                    disabled={currentIndex === 0}
                  >
                    <img src="/images/icons/prev.svg" alt="Previous" />
                  </button>
                  <button
                    className={`${styles.nextButton} ${styles.navButton}`}
                    onClick={onScrollRight}
                    disabled={
                      currentIndex + maxVisibleItems >= comparisons.length
                    }
                  >
                    <img src="/images/icons/next.svg" alt="Next" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.compareContainer}>
        <div
          className={styles.productsSlider}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {comparisons
            .slice(currentIndex, currentIndex + maxVisibleItems)
            .map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onRemove={() => onRemoveItem(item.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

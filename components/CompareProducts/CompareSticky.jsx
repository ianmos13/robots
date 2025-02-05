"use client";
import styles from "./CompareProducts.module.scss";
import StickyProductCard from "./StickyProductCard";

export default function CompareSticky({
  comparisons,
  currentIndex,
  maxVisibleItems,
  onScrollLeft,
  onScrollRight,
  onClearComparison,
  sliderRef,
  onRemoveItem,
  onDownloadExcel,
}) {
  return (
    <div className={`${styles.compareWrapperScroll} ${styles.fixed}`}>
      <div className={styles.topControls}>
        <div className={styles.buttonContainer}>
          <div className={styles.leftContainer}>
            <button
              className={styles.downloadButton}
              onClick={onDownloadExcel}
            >
              <img src="/images/icons/download.svg" alt="download" />
              Скачать таблицу
            </button>
            <button className={styles.addButton}>
              <img src="/images/icons/plus.svg" alt="add" /> Добавить товар
            </button>
            {comparisons.length > 0 && (
              <button
                className={styles.clearButton}
                onClick={onClearComparison}
              >
                <img src="/images/icons/trash.svg" alt="trash" />
                Удалить все
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
        <div className={styles.separator}></div>
        <div className={styles.compareContainer}>
          <div className={styles.productsSlider} ref={sliderRef}>
            {comparisons
              .slice(currentIndex, currentIndex + maxVisibleItems)
              .map((item) => (
                <StickyProductCard
                  key={item.id}
                  item={item}
                  onRemove={() => onRemoveItem(item.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

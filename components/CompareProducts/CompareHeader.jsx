"use client";
import CategoriesFilter from '@/components/UI/CategoriesFilter/CategoriesFilter'
import styles from "./CompareProducts.module.scss"
import ProductCard from "./ProductCard"

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
  const uniqueCategories = categoryList.filter((category) =>
    categoryKeys.has(category.key)
  );

  return (
    <div className={styles.compareWrapper}>
      <div className={styles.header}>
        <div className={styles.leftConainer}>
          <h3>Сравнение товаров</h3>
          <CategoriesFilter 
            categories={uniqueCategories}
						onDelete={onRemoveCategory}
          />
        </div>
        <div>
          <div className={styles.rightContainer}>
            <div className={styles.btnContaier}>
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
        </div>
      </div>
      <div className={styles.compareContainer}>
        <div className={styles.productsSlider} ref={sliderRef}>
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

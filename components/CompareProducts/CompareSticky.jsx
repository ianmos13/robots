"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./CompareProducts.module.scss";
import StickyProductCard from "./StickyProductCard";
import { useRouter } from "next/navigation";
import {useMediaQuery} from "react-responsive";

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
  categoryList,
  compareHeaderWidth,
  compareStickyLeft
}) {
  const router = useRouter();
  const goToCatalogPage = () => {
    router.push("/promyshlennye-roboty");
  };

  const isAll = useMediaQuery({ query: '(max-width: 767px)' });

  // const [windowWidth, setWindowWidth] = useState(
  //   typeof window !== "undefined" ? window.innerWidth : 0
  // );
  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  const isDesktop = !isAll;

  const itemsToRender = isDesktop
    ? comparisons.slice(currentIndex, currentIndex + maxVisibleItems)
    : comparisons;

  const touchStartXRef = useRef(null);

  const handleTouchStart = (e) => {
    if (!isDesktop) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (isDesktop || touchStartXRef.current === null || !sliderRef.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;

    const card = sliderRef.current.children[0];
    const cardWidth = card ? card.clientWidth : 0;
    const swipeThreshold = cardWidth / 3;

    if (Math.abs(deltaX) > swipeThreshold) {
      deltaX > 0 ? onScrollRight() : onScrollLeft();
    } else {

      if (sliderRef.current.children.length > currentIndex) {
        const activeCard = sliderRef.current.children[currentIndex];
        sliderRef.current.scrollTo({
          left: activeCard.offsetLeft,
          behavior: "smooth",
        });
      }
    }
    touchStartXRef.current = null;
  };

  let containerStyles = compareHeaderWidth ? {width: `${compareHeaderWidth + 40}px`} : {}
  containerStyles = compareStickyLeft ? { ...containerStyles, left: `${compareStickyLeft}px`} : containerStyles

  return (
    <div className={`${styles.compareWrapperScroll} ${styles.fixed}`}
          style={containerStyles}
    >
      <div className={styles.topControls}>
        <div className={styles.buttonContainer}>
          <div className={styles.leftContainer}>
            {comparisons?.length > 0 && (
              <button className={styles.downloadButton} onClick={onDownloadExcel}>
              <img src="/images/icons/download.svg" alt="download" />
              <span>Скачать таблицу</span>
            </button>
            )}
            <button className={styles.addButton} onClick={goToCatalogPage}>
              <img src="/images/icons/plus.svg" alt="add" />
              <span>Добавить товар</span>
            </button>
            {comparisons.length > 0 && (
              <button className={styles.clearButton} onClick={onClearComparison}>
                <img src="/images/icons/trash.svg" alt="trash" />
                <span>Удалить все</span>
              </button>
            )}
          </div>
          {comparisons?.length > maxVisibleItems && (
            <div className={styles.navControls}>
              <div className={`${styles.containerButton} ${styles.containerButtonSticky}`}>
                <button
                    className={styles.arrowLeft}
                    onClick={onScrollLeft}
                    disabled={currentIndex === 0}
                >
                  <svg className={styles.icon} />
                </button>
                <button
                    className={styles.arrowRight}
                    onClick={onScrollRight}
                    disabled={
                        currentIndex + maxVisibleItems >= comparisons.length
                    }
                >
                  <svg className={styles.icon} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.separator}></div>
        <div className={styles.compareContainer}>
          <div
            className={styles.productsSlider}
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {itemsToRender.map((item, index) => (
              <div key={index} className={styles.sliderProductCard}>
                <StickyProductCard
                  item={item}
                  categories={categoryList}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

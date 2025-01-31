"use client";
import { useState, useEffect } from "react";
import styles from "./ProductCategoryGridSlider.module.scss";
import TitleWithSeparator from "../TitleWithSeparator/TitleWithSeparator";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import PdfButton from "../Buttons/PdfButton/PdfButton";
import robotsList from "@/public/data/products.json";
import categories from "@/public/data/products-catgories.json";
import useDeviceType from "@/hooks/useDeviceType";
import CategoryTags from "../CategoryTags/CategoryTags";
import { useRouter } from "next/navigation";
export default function ProductCategoryGridSlider() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("");
  const { isTabletView, isMobileView } = useDeviceType();
  const router = useRouter();
  const allCategories = [
    { key: "all", name: "Все роботы" },
    ...categories,
  ];

  const filteredRobots =
    selectedCategory === "all"
      ? robotsList
      : robotsList.filter((robot) => robot.category === selectedCategory);

  const totalFiltered = filteredRobots.length;
  const maxIndex = Math.max(totalFiltered - 4, 0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setActiveButton("next");
    setTimeout(() => setActiveButton(""), 300);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setActiveButton("prev");
    setTimeout(() => setActiveButton(""), 300);
  };

  const getTranslateXValue = () => {
    if (isMobileView) return 100;
    if (isTabletView) return 49;
    return 24.7;
  };

  const handleShowAll = () => {
    router.push('/catalog');
  };
  return (
    <section className={styles.container}>
      <TitleWithSeparator
        title="Категории продукции"
        addButton="Посмотреть все модели"
        onClick={handleShowAll} 
      />

      <div className={styles.tagsConainer}>
        <div className={styles.tag}>
        <CategoryTags
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        </div>
       
        <PdfButton pdfName={"pdfName"} />
      </div>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * getTranslateXValue()}%)` }}
        >
          {filteredRobots.map((robot) => (
            <ProductCard key={robot.id} robot={robot} />
          ))}
        </div>
      </div>

      {totalFiltered > 4 && (
        <div className={styles.footer}>
          <div className={styles.containerButton}>
            <button
              className={`${styles.prevButton} ${styles.navButton} ${
                activeButton === "prev" ? styles.active : ""
              }`}
              onClick={handlePrev}
            >
              <img
                src={
                  activeButton === "prev"
                    ? "/images/icons/active-prev.svg"
                    : "/images/icons/prev.svg"
                }
                alt="Previous"
              />
            </button>
            <button
              className={`${styles.nextButton} ${styles.navButton} ${
                activeButton === "next" ? styles.active : ""
              }`}
              onClick={handleNext}
            >
              <img
                src={
                  activeButton === "next"
                    ? "/images/icons/active-next.svg"
                    : "/images/icons/next.svg"
                }
                alt="Next"
              />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProductCategories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TitleWithSeparator from "@/components/UI/TitleWithSeparator/TitleWithSeparator";
import useCategories from '@/hooks/useCategories';

const ProductCategories = () => {
  const swiperRef = useRef(null)
  const [activeButton, setActiveButton] = useState("");
  const router = useRouter();
  const { categories, error, loading } = useCategories();
  const selectedCategories = categories?.promyshlennyeRoboty?.children || []

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev()
    setActiveButton("prev");
    setTimeout(() => setActiveButton(""), 300);
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext()
    setActiveButton("next");
    setTimeout(() => setActiveButton(""), 300); 
  };

  const handleCategoryClick = (categoryLink) => {
    router.push(categoryLink);
  };
  if (selectedCategories.length > 0) return (
    <section className={styles.container}>
      <TitleWithSeparator title={"Категории промышленных роботов"} />

      <div className={styles.grid}>
        {selectedCategories.map((category, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCategoryClick(category.link)}
          >
            <div className={styles.imageContainer}>
              <img
                loading="lazy"
                src={category.image}
                alt={category.name}
                className={styles.image}
              />
            </div>
            <div className={styles.hoverOverlay}>
              <img
                src="/images/icons/hover_arrow.svg"
                alt="Hover arrow"
                className={styles.hoverImage}
              />
            </div>
            <div className={styles.name}><h3>{category.name}</h3></div>
          </div>
        ))}
      </div>

      <div className={styles.slider}>
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          onSwiper={swiper => (swiperRef.current = swiper)}
          modules={[Navigation]}
        >
          {selectedCategories.map((category, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div
                className={styles.card}
                onClick={() => handleCategoryClick(category.link)}
              >
                <div className={styles.imageContainer}>
                  <img
                    loading="lazy"
                    src={category.image}
                    alt={category.name}
                    className={styles.image}
                  />
                </div>
                <div className={styles.name}>{category.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.containerButton}>
          <button
            className={`${styles.prevButton} ${styles.navButton} ${
              activeButton === "prev" ? styles.active : ""
            }`}
            onClick={handlePrevClick}
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
            onClick={handleNextClick}
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
    </section>
  );
};

export default ProductCategories;

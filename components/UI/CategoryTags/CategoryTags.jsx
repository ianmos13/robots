"use client";

import styles from "./CategoryTags.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function CategoryTags({ theme, categories, selectedCategory }) {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(category.link);
  };


  const filteredCategories = categories.filter(
    (cat) => !(cat.key === "6" && cat.link === "/pozicionery/povorotnye/")
  );

  return (
    <>
      <div className={`${styles.swiperCategoryContainer} ${styles[`${theme}SwiperContainer`]}`}>
        <Swiper
          className={styles.swiper}
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={0}
        >
          {filteredCategories.map((category, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <button
                key={category.key}
                className={selectedCategory === category.key ? styles.activeTag : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`${styles.tagsContainer} ${styles[`${theme}Container`]}`}>
        <nav className={styles.tags}>
          {filteredCategories.map((cat, index) => (
            <Tag
              key={index}
              category={cat}
              selectedCategory={selectedCategory}
              onClick={() => handleCategoryClick(cat)}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

const Tag = ({ category, selectedCategory, onClick }) => {
  return (
    <button
      key={category.key}
      className={selectedCategory === category.key ? styles.activeTag : ""}
      onClick={onClick}
    >
      {category.name}
    </button>
  );
};

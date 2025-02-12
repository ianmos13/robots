"use client";

import styles from "./CategoryTags.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";

export default function CategoryTags({ theme, categories, selectedCategory, onSelectCategory }) {
  return (
      <>
          <div className={`${styles.swiperCategoryContainer} ${styles[`${theme}SwiperContainer`]}`}>
              <Swiper
                  className={styles.swiper}
                  direction='horizontal'
                  slidesPerView={'auto'}
                  spaceBetween={0}
              >
                  {categories.map((category, index) => (
                      <SwiperSlide key={index} className={styles.swiperSlide}>
                          <button
                              key={category.key}
                              className={
                                  selectedCategory === category.key ? styles.activeTag : ''
                              }
                              onClick={() => onSelectCategory(category.key)}
                          >
                              {category.name}
                          </button>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
          <div className={`${styles.tagsContainer} ${styles[`${theme}Container`]}`}>
            <nav className={styles.tags}>
              {categories.map((cat, index) => (
                  <Tag
                      key={index}
                      category={cat}
                      selectedCategory={selectedCategory}
                      onSelectCategory={onSelectCategory}
                  />
              ))}
            </nav>
          </div>
      </>

  );
}

const Tag = ({ category, selectedCategory, onSelectCategory }) => {
  return (
      <button
          key={category.key}
          className={selectedCategory === category.key ? styles.activeTag : ""}
          onClick={() => onSelectCategory(category.key)}
      >
        {category.name}
      </button>
  )
}
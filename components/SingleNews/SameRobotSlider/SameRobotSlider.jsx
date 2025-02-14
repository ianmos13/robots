import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./SameRobotSlider.module.scss";
import ProductCard from "@/components/UI/ProductCard/ProductCard";
import product from "@/public/data/products.json";
import "swiper/css";
import "swiper/css/navigation";

export default function SameRobotSlider() {
  const [activeButton, setActiveButton] = useState("");

  const handlePrevClick = () => {
    setActiveButton("prev");
    setTimeout(() => setActiveButton(""), 300);
  };

  const handleNextClick = () => {
    setActiveButton("next");
    setTimeout(() => setActiveButton(""), 300);
  };

  return (
    <div className={styles.sameRobotContainer}>
      <h4>Какие роботы для этого подойдут:</h4>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`,
          }}
          modules={[Navigation]}
        >
          {product.map((robot, index) => (
            <SwiperSlide key={index}>
              <ProductCard robot={robot} />
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
    </div>
  );
}

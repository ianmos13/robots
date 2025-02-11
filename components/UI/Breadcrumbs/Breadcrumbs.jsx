"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (isMobile) {
    return (
      <section className={styles.container}>
        <Swiper
          className={styles.swiperContainer}
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={10}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <button
                className={`${styles.breadcrumbButton} ${
                  index === items.length - 1 ? styles.active : ""
                }`}
                onClick={() => (window.location.href = item.link)}
                disabled={index === items.length - 1}
              >
                {item.label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <nav aria-label="breadcrumb">
        <div className={styles.breadcrumb}>
          {items.map((item, index) => (
            <button
              key={index}
              className={`${styles.breadcrumbButton} ${
                index === items.length - 1 ? styles.active : ""
              }`}
              onClick={() => (window.location.href = item.link)}
              disabled={index === items.length - 1}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Breadcrumbs;

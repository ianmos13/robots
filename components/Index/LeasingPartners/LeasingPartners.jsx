"use client";

import styles from "./LeasingPartners.module.scss";
import useDeviceType from "@/hooks/useDeviceType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const partnersLogos = [
  "/images/partners/partner1.svg",
  "/images/partners/partner2.svg",
  "/images/partners/partner3.svg",
  "/images/partners/partner4.svg",
  "/images/partners/partner5.svg",
  "/images/partners/partner6.png",
  "/images/partners/partner7.svg",
  "/images/partners/partner8.svg",
  "/images/partners/partner9.svg",
  "/images/partners/partner10.svg",
  "/images/partners/partner11.svg",
  "/images/partners/partner12.svg",
];

export default function LeasingPartners() {
  const { isTabletView, isMobileView } = useDeviceType();

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>Партнеры по лизингу</h4>
       
      
          <div className={styles.text}>Мы сотрудничаем с ведущими лизинговыми компаниями, чтобы сделать покупку роботов удобной и доступной. Выберите подходящий вариант и оформите лизинг прямо сейчас!</div>
       
      </div>

      <div className={styles.separator}></div>
      
      <div className={styles.partnerGrid}>
        {partnersLogos.map((logo, index) => (
          <div key={index} className={styles.partnerLogoContainer}>
            <img
              src={logo}
              alt={`Партнер ${index + 1}`}
              className={styles.partnerLogo}
            />
          </div>
        ))}
      </div>
      <div className={styles.slider}>
        <Swiper spaceBetween={5} slidesPerView={isTabletView ? 2.5 : 1.2} modules={[Navigation]}>
          {partnersLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.partnerLogoContainer}>
                  <img
                    src={logo}
                    alt={`Партнер ${index + 1}`}
                    className={styles.image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.buttonContainer}>
        <button className={`${styles.detailsBtn}`}>Оформить лизинг</button>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import styles from "./LeasingPartners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (partnersLogos.length > 0) return (
    <>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}><h2>Партнеры&nbsp;по&nbsp;лизингу</h2></div>

          <div className={styles.text}>
            Мы сотрудничаем с ведущими лизинговыми компаниями, чтобы сделать
            покупку роботов удобной и доступной. Выберите подходящий вариант и
            оформите лизинг прямо сейчас!
          </div>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.partnerGrid}>
          {partnersLogos.map((logo, index) => (
            <div key={index} className={styles.partnerLogoContainer}>
              <img
                loading="lazy"
                src={logo}
                alt={`Партнер ${index + 1}`}
                className={styles.partnerLogo}
              />
            </div>
          ))}
        </div>
        <div className={styles.slider}>
          <Swiper
            spaceBetween={0}
            slidesPerView={"auto"}
            modules={[Navigation]}
          >
            {partnersLogos.map((logo, index) => (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <div className={styles.card}>
                  <div className={styles.partnerLogoContainer}>
                    <img
                      loading="lazy"
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
          <button onClick={handleOpenModal} className={`${styles.detailsBtn}`}>
            Оформить лизинг
          </button>
        </div>
      </section>
      <RequestModal
        isOpen={isModalOpen}
        text={"Оформить лизинг"}
        onClose={handleCloseModal}
      />
    </>
  );
}

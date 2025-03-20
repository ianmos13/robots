'use client'
import React, { useState } from "react";
import RequestModal from "../Modal/RequestModal/RequestModal";
import styles from "./LeaveRequestBanner.module.scss";

const LeaveRequestBanner = ({ size, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const bannerData = {
    title: data?.title
      ? data.title
      : "Убедитесь в возможностях наших\u00A0роботов\u00A0на\u00A0ваших\u00A0задачах",
    titleMobile: data?.title
      ? data.title
      : "Убедитесь в возможностях наших роботов на\u00A0ваших задачах",
    text: data?.text
      ? data.text
      : "Проведем сварку ваших материалов роботами, чтобы вы оценили качество и точность до покупки.",
    buttonText: data?.buttonText ? data.buttonText : "Оставить заявку",
    video: data?.video ? data.video : "/test_video.webm"
  };
  

  return (
    <>
      <section
        className={`${styles.container} ${styles[`${size}Container`]} ${isModalOpen ? "blurred" : ""}`}
      >
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={`${styles.title} ${styles.desktopTablet}`}>
              <h2>{bannerData.title}</h2>
            </div>
            <div className={`${styles.title} ${styles.tabletTitle}`}>
            <h2>{bannerData.titleMobile}</h2>
            </div>
            <div className={styles.description}>
              {bannerData.text}
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={handleOpenModal}>
                {bannerData.buttonText}
              </button>
            </div>
          </div>
          <div className={styles.videoContainer}>
            <video
              className={styles.videoBackground}
              src={bannerData.video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
      <RequestModal
        isOpen={isModalOpen}
        text={bannerData.buttonText}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default LeaveRequestBanner;

'use client'
import React, { useState } from "react";
import RequestModal from "../Modal/RequestModal/RequestModal";
import styles from "./LeaveRequestBanner.module.scss";

const LeaveRequestBanner = ({ size }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <section
        className={`${styles.container} ${styles[`${size}Container`]} ${isModalOpen ? "blurred" : ""}`}
      >
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={`${styles.title} ${styles.desktopTablet}`}>
              Убедитесь в возможностях наших&nbsp;роботов&nbsp;на&nbsp;ваших&nbsp;задачах
            </div>
            <div className={`${styles.title} ${styles.tabletTitle}`}>
              Убедитесь в возможностях наших роботов на&nbsp;ваших задачах
            </div>
            <div className={styles.description}>
              Проведем сварку ваших материалов роботами, чтобы вы оценили качество
              и точность до покупки.
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={handleOpenModal}>Оставить заявку</button>
            </div>
          </div>
          <div className={styles.videoContainer}>
            <video
              className={styles.videoBackground}
              src="/test_video.webm"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

     
      <RequestModal isOpen={isModalOpen} text={"Оставить заявку"} onClose={handleCloseModal} />
    </>
  );
};

export default LeaveRequestBanner;

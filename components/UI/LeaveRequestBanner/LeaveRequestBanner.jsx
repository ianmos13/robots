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
                src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/4ba7/84e0/-dfbe-4c06-beae-4628a16ec18b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ogm5xugfbCPrBA0UUyivD3t6Cxkfeau82x7ttf5ZtTbI1ojBhDq0tH3mPmLD8nQU-jiiuQsn3CIlpxJ4nT5h9~VvBk49i9uVpQYbEY-9S3lyv91PZ6hxoVvFMaHbYR22UT~KNcbSbPHS-KAn9y9~I6uzxUnIJ18euy2ELr8fpHYRzqw4RBxl7IGQaFu5-zyQuuQdS0~mJF19WF0fVJhPA1SjP-YDlPwM9vBRFfQMqEm2pE-Abs5o9rSd~NX2dAeqz~n6gOWDz8XrauUtJDnoKY-5YgwkpcyUNQtutoRm4Ly6z8jVVsOyWttyauwPz~~nvUO3MONtZU6qvPE-HevtSQ__"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

     
      <RequestModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default LeaveRequestBanner;

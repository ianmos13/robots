'use client'
import React, { useState } from "react";
import RequestModal from "../Modal/RequestModal/RequestModal";
import styles from "./LeaveRequestBanner.module.scss";

const LeaveRequestBanner = ({ theme }) => {
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
        className={`${styles.container} ${styles[`${theme}Container`]} ${isModalOpen ? "blurred" : ""}`}
      >
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.title}>
              Убедитесь в возможностях наших&nbsp;роботов&nbsp;на&nbsp;ваших&nbsp;задачах
            </div>
            <div className={styles.description}>
              Проведем сварку ваших материалов роботами, чтобы вы оценили качество
              и точность до покупки.
            </div>
            <button onClick={handleOpenModal}>Оставить заявку</button>
          </div>

          <video
            className={styles.videoBackground}
            src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/4ba7/84e0/-dfbe-4c06-beae-4628a16ec18b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzMHxlL5gS8W8tdSea3ttiq39g7RbqDalJLYoNH87OheQBcQaqSiNWAN0y5MHT3vueLIz5nJpA7qUACpxeBelGDBcAVs-YQ0TtBbo45NtypRYvq-tr4fXOKAAG-ebfJ0ql1RklZX2zYk5LV0d8MCuAr4sWclJFmhZXygQCGoDlHOM7EXTc53QxH9za8e520lLnWqumN-9X7tWHgqmBJmJPvJG~fc-DIH21f6YhnHZ3uJ8WxT9ksGZKU7ko1c-b2iHoP8vc7AZlID6cDdqJUSrT0INF1BdnIQVkh4gHZpOFuAfoHkr0~MVmi3eTwiFv75hNm9nwVrWnyIb2d3ASIR0A__"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%" }}
          />
        </div>
      </section>

     
      <RequestModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default LeaveRequestBanner;

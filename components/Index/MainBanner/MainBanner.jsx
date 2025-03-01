"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./MainBanner.module.scss";
import robotImg from "@/assets/images/main-banner.svg";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";

const MainBanner = () => {
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
        className={`${styles.container} ${isModalOpen ? "blurred" : ""}`}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerMainText}>Промышленные</div>
          <div className={styles.headerSubTextContainer}>
            <div className={styles.inner}>
              <div className={styles.headerSubText}>Роботы CRP</div>
              <div className={styles.headerDescription}>
                Упрощаем и ускоряем производственные процессы в самых разных
                сферах, от электроники для пищевой промышленности.
              </div>
              <div className={styles.requestDesktop}>
                {" "}
                <button className={styles.submitButton} onClick={handleOpenModal}>
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerInfo}>
          <div className={styles.leftColumn}>
            <div className={styles.description}>
              Поставляем и обслуживаем промышленных роботов CRP в России и
              соседних странах.
            </div>
            <div className={styles.requestMobile}>
              <button className={styles.submitButton} onClick={handleOpenModal}>
                Оставить заявку
              </button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image src={robotImg} alt="Промышленный робот CRP" />
          </div>
        </div>
      </section>

      <RequestModal
        isOpen={isModalOpen}
        text={"Оставить заявку"}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default MainBanner;

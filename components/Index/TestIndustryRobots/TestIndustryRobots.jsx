"use client";

import React, { useState } from "react";
import styles from "./TestIndustryRobots.module.scss";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";

const TestIndustryRobots = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {" "}
      <section className={styles.container}>
        <div className={styles.testIndustryRobots}>
          {" "}
          <div className={styles.textContent}>
            <div className={styles.title}>
              {" "}
              <h1>
                Испытайте
                <br />
                промышленных
                <br />
                роботов в действии
              </h1>
            </div>
            <div className={styles.description}>
              {" "}
              <p>
                Пройдите тест-драйв и убедитесь в их эффективности для вашего
                производства.
              </p>
              <p>
                Реальные задачи, персональная настройка и профессиональная
                консультация. Оцените возможности промышленных роботов на
                практике!
              </p>
            </div>
            <div>
              {" "}
              <button onClick={handleOpenModal}>Взять на тест-драйв</button>
            </div>
          </div>
        </div>
      </section>
      <RequestModal
        isOpen={isModalOpen}
        text={"Оставьте заявку на тест-драйв"}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default TestIndustryRobots;

"use client";

import React, { useState } from "react";
import styles from "./CrpAutomation.module.scss";
import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal";

const CrpAutomation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>CRP AUTOMATION RUSSIA</div>
        <div className={styles.category}>O Компании</div>
      </div>

      <div className={styles.description}>
        Мы являемся представителем и официальным дистрибьютором завода
        промышленных роботов CRP на территории России, Беларуссии, Казахстана,
        Кыргызстана и Армении. Роботы CRP используются в различных отраслях
        промышленности, включая мебельное производство, нефтегазовую отрасль,
        электронику, машиностроение, пищевую промышленность и многое другое.
      </div>

      <div className={styles.crpAutomation}>
        <div className={styles.leftColumn}>
          <img
            src="/images/CrpAutomation.svg"
            className={styles.image}
            alt="CRP Automation"
          />
        </div>

        <div className={styles.centerBlock}>
          <div className={styles.videoWrapper}>
            <video autoPlay muted loop controls={false} style={{ width: "100%" }}>
              <source
                src="https://s3-figma-videos-production-sig.figma.com/video/1026790075068458266/TEAM/a4c9/e0ac/-db43-44cb-830e-b496539a502f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CgEKEhmBp2SPn~~6TcEMXpq0QsIqKA6R2-eL0vUiUsnGhstStv2Wwg-4Py1BZv~WjakwVJJwF4CFnkTj8NEKvHjaTzuGSORCPZ9c6s7XWCHDAf6Q9ys7bgbh0Ga1vnNvVX2xQkGjJsCm5aqfvFiT0HySkEfBWs5xy3j~Mmf1NTKa2JHxIZohXlEi8MXmeDNrjj6fVAF2L7gtBPtPZ4nfV-JNXz~R0Y9~Tqu6Dno8SUdU~bALR2If7Bw7rp7xlFKhVFzHaBdfQASL5hB2taJN-0GTAJRkJV0fZeL9DpTtWz5jrAgXzOMQGXvabijv5f~7rujnaIGHNioHl6OAQJvZAA__"
                type="video/mp4"
              />
            </video>
            {/* <div className={styles.playIcon}>
              <img src="/images/icons/play.svg" alt="play" />
            </div> */}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.feature}>
            <div className={styles.imgContainer}> 
            <img src="/images/icons/garanty1.svg" alt="Гарантия" />
            </div>
          
            <div className={styles.featureDescription}>
              Гарантия 2 года с момента запуска у вас на производстве
            </div>
          </div>

          <div className={styles.feature}>
          <div className={styles.imgContainer}> 
            <img src="/images/icons/garanty24_7.svg" alt="Сервис" />
            </div>
            <div className={styles.featureDescription}>
              Гарантийное и постгарантийное обслуживание 24/7
            </div>
          </div>

          <div className={styles.feature}>
          <div className={styles.imgContainer}> 
            <img src="/images/icons/best_price1.svg" alt="Цена-качество" />
            </div>
            <div className={styles.featureDescription}>
              Оптимальное соотношение «цена-качество». Короткий период
              окупаемости
            </div>
          </div>

          <div className={styles.feature}>
          <div className={styles.imgContainer}> 
            <img src="/images/icons/high-speed1.svg" alt="Скорость" />
            </div>
            <div className={styles.featureDescription}>
              Высокая скорость обработки заказов
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleOpenModal} className={styles.ctaButton}>
        Получить бесплатную консультацию
      </button>
    </section>
       <RequestModal
       isOpen={isModalOpen}
       text={"Оставьте заявку"}
       onClose={handleCloseModal}
     />
     </>
  );
};

export default CrpAutomation;

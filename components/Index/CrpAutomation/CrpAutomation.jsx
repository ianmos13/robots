"use client";

import RequestModal from "@/components/UI/Modal/RequestModal/RequestModal"
import { useState } from "react"
import styles from "./CrpAutomation.module.scss"
import VideoPlayer from '@/components/UI/VideoPlayer/VideoPlayer';

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
        <div className={styles.title}><h2>CRP ROBOT</h2></div>
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
          <VideoPlayer videoPath='/test_video_2.webm'/>
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
       text={"Получить бесплатную консультацию"}
       onClose={handleCloseModal}
     />
     </>
  );
};

export default CrpAutomation;

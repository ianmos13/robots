"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./CompletedProjectsSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const projects = [
  {
    title: "Замена роботов и оптимизация линии упаковки сахара",
    description:
      "Клиенту потребовалась замена вышедших из строя роботов другого производителя и модернизация линии упаковки сахара. Мы демонтировали неисправное оборудование, пересобрали системы управления, устранили предыдущие ошибки и установили два робота CRP-RA18-25. Работа линии восстановлена в рекордные сроки, сэкономив затраты на 10 сотрудников.",
    image: "images/completed-project-catalog.svg",
    tag: "Металлоконструкции",
    data: "Cентябрь 2024",
  },
  {
    title: "Оптимизация производственного процесса",
    description:
      "Полная модернизация линии автоматизированной упаковки на основе манипуляторов CRP-RH14-10. Внедрение новых алгоритмов снизило потери на 15% и увеличило скорость упаковки на 20%.",
    image: "images/completed-project-catalog.svg",
    tag: "Металлоконструкции",
    data: "Cентябрь 2024",
  },
  {
    title: "Автоматизация сборочного процесса",
    description:
      "Внедрение автоматизированной сборочной линии с использованием роботов CRP-XYZ12. Увеличение производительности на 25% и снижение ошибок сборки на 5%.",
    image: "images/completed-project-catalog.svg",
    tag: "Металлоконструкции",
    data: "Cентябрь 2024",
  },
  {
    title: "Интеграция роботов в существующую систему",
    description:
      "Интеграция роботов CRP-ABC34 в существующую производственную линию. Обеспечена совместимость систем и повышение общей эффективности на 18%.",
    image: "images/completed-project-catalog.svg",
    tag: "Металлоконструкции",
    data: "Cентябрь 2024",
  },
  {
    title: "Оптимизация производственного процесса",
    description:
      "Полная модернизация линии автоматизированной упаковки на основе манипуляторов CRP-RH14-10. Внедрение новых алгоритмов снизило потери на 15% и увеличило скорость упаковки на 20%.",
    image: "images/completed-project-catalog.svg",
    tag: "Металлоконструкции",
    data: "Cентябрь 2024",
  },
];

export default function CompletedProjectsSlider() {
  const [activeButton, setActiveButton] = useState("");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handlePrevClick = () => {
    setActiveButton("prev");
    setTimeout(() => setActiveButton(""), 300);
  };

  const handleNextClick = () => {
    setActiveButton("next");
    setTimeout(() => setActiveButton(""), 300);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <h4>Проекты внедрения промышленных роботов</h4>
       
        <div className={styles.containerButton}>
          <button
            ref={prevRef}
            className={`${styles.prevButton} ${styles.navButton} ${
              activeButton === "prev" ? styles.active : ""
            }`}
            onClick={handlePrevClick}
            aria-label="Предыдущий слайд">
            <img
              src={
                activeButton === "prev"
                  ? "/images/icons/active-prev.svg"
                  : "/images/icons/prev.svg"
              }
              alt="Previous"
            />
          </button>

          <button
            ref={nextRef}
            className={`${styles.nextButton} ${styles.navButton} ${
              activeButton === "next" ? styles.active : ""
            }`}
            onClick={handleNextClick}
            aria-label="Следующий слайд">
            <img
              src={
                activeButton === "next"
                  ? "/images/icons/active-next.svg"
                  : "/images/icons/next.svg"
              }
              alt="Next"
            />
          </button>
        </div>
      
      </div>
      <div className={styles.separator}></div>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={(swiper) => {
            swiper.navigation.update();
          }}>
          {projects.map((prj, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={prj.image}
                    alt={prj.title}
                    className={styles.image}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.titleContainer}>
                    <div className={styles.data}>{prj.data}</div>
                    <div className={styles.tag}>{prj.tag}</div>
                    <div className={styles.title}>{prj.title}</div>
                  </div>
                  <div className={styles.description}>{prj.description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./RobotContaSlider.module.scss";




const slides = [
  {
    id: 1,
    image: "/images/RobotContaSlider.svg",
    title: "Шкаф электроавтоматики",
    description:
      "Современная система дистанционного управления позволяет роботу оптимизировать ускорение и замедление исходя из фактической нагрузки, насколько это возможно, чтобы сократить продолжительность рабочего хода.",
  },
  {
    id: 2,
    image: "/images/RobotContaSlider.svg",
    title: "Гибкий промышленный робот для мелких производств",
    description:
      "Промышленный робот для мелких производств и прототипирования",
  },
  {
    id: 3,
    image: "/images/RobotContaSlider.svg",
    title: "Системы автоматизации для разных отраслей",
    description: "Автоматизация процессов для различных отраслей промышленности",
  },
];

const RobotContaSlider = () => {
   const [activeButton, setActiveButton] = useState("");
  
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
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
       
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
        }}
    
        modules={[Navigation]}>
      
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              
              <div className={styles.slideContent}>
                <div className={styles.title}>{slide.title}</div>
                <div>{slide.description}</div>
              </div>
              <img src={slide.image} alt={slide.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.containerButton}>
          <button
            className={`${styles.prevButton} ${styles.navButton} ${
              activeButton === "prev" ? styles.active : ""
            }`}
            onClick={handlePrevClick}>
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
            className={`${styles.nextButton} ${styles.navButton} ${
              activeButton === "next" ? styles.active : ""
            }`}
            onClick={handleNextClick}>
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
  );
};

export default RobotContaSlider;

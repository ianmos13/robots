"use client";

import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./RobotContainSlider.module.scss";
import SwitchButtons from "@/components/UI/Buttons/SwitchButtons/SwitchButtons";

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

const RobotContainSlider = () => {
    const swiperRef = useRef(null)
    const [currentSwiper, setCurrentSwiper] = useState(swiperRef.current)

    useEffect(() => {
        if(swiperRef.current)
            setCurrentSwiper(swiperRef.current)
    }, [swiperRef]);

    const handlePrevClick = () => {
      currentSwiper.slidePrev()
    };
  
    const handleNextClick = () => {
      currentSwiper.slideNext()
    };
  
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        spaceBetween={0}
        slidesPerView={"auto"}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <div className={styles.slide}>
              <div className={styles.robotInfo}>
                <div className={styles.slideContent}>
                    <div className={styles.title}>{slide.title}</div>
                    <div className={styles.description}>{slide.description}</div>
                </div>
                <div className={styles.containerButton}>
                  <SwitchButtons
                      handlePrev={handlePrevClick}
                      handleNext={handleNextClick}
                  />
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RobotContainSlider;

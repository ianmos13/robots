"use client";

import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./RobotContainSlider.module.scss";
import SwitchButtons from "@/components/UI/Buttons/SwitchButtons/SwitchButtons";

const RobotContainSlider = ({info}) => {
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
        {info.map((slide, index) => (
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

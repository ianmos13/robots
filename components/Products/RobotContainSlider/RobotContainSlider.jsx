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
                {slide.slideInfo && (<div
                  className={styles.slideContent}
                  dangerouslySetInnerHTML={{ __html: slide?.slideInfo }}
                />)}
                <div className={styles.slideContent}>
                    <h3>{slide.title}</h3>
                    {slide.description}
                </div>
                <div className={styles.containerButton}>
                  <SwitchButtons
                      handlePrev={handlePrevClick}
                      handleNext={handleNextClick}
                  />
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img loading="lazy" src={slide.image} alt={slide.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RobotContainSlider;

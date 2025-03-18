"use client";

import dynamic from "next/dynamic";
import SwitchButtons from "@/components/UI/Buttons/SwitchButtons/SwitchButtons";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./CompletedProjectsSlider.module.scss";
import useConvertedDate from "@/hooks/useConvertedDate";
import useCompletedProjects from "@/hooks/useCompletedProjects";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Динамический импорт компонентов Swiper без SSR
// const Swiper = dynamic(
//   () => import("swiper/react").then((mod) => mod.Swiper),
//   { ssr: false }
// );
// const SwiperSlide = dynamic(
//   () => import("swiper/react").then((mod) => mod.SwiperSlide),
//   { ssr: false }
// );

const TruncatedText = ({ prj }) => {
  const textRef = useRef(null);

  const sanitizeText = (text) => text?.replace(/&lt;[^&]+&gt;/g, "");
  const sanitizedText = sanitizeText(prj?.detailsH2?.takeOfferText);

  const [isTruncated, setIsTruncated] = useState(false);
  const [displayText, setDisplayText] = useState(sanitizedText);

  useEffect(() => {
    const truncateText = () => {
      const linkHTML = `<a href="/our-projects/${prj.slug}" class="${styles.mobileRead}">Читать далее</a>`;
      const element = textRef.current;
      if (!element) return;
      element.innerText = sanitizedText;

      if (element.scrollHeight <= element.clientHeight) {
        setDisplayText(sanitizedText);
        setIsTruncated(false);
        return;
      }

      const sentences = sanitizedText?.match(/[^\.!\?]+[\.!\?]+[\s]*/g);
      if (!sentences) {
        setIsTruncated(false);
        setDisplayText(sanitizedText);
        return;
      }

      let truncatedText = sanitizedText;

      for (let i = sentences.length; i >= 0; i--) {
        truncatedText = sentences.slice(0, i).join("").trim();
        element.innerHTML = truncatedText + linkHTML;
        if (element.scrollHeight <= element.clientHeight) {
          setDisplayText(truncatedText);
          setIsTruncated(true);
          break;
        }
      }
    };
    setTimeout(truncateText, 0);
  }, [sanitizedText, prj.slug]);

  return (
    <div>
      <div ref={textRef} className={styles.description}>
        {isTruncated ? (
          <>
            {displayText}{" "}
            <Link href={`/our-projects/${prj.slug}`} className={styles.mobileRead}>
              Читать далее
            </Link>
          </>
        ) : (
          displayText
        )}
      </div>
    </div>
  );
};

function ConvertedDate({ date }) {
  const convertedDate = useConvertedDate(date);
  return <span>{convertedDate}</span>;
}

export default function CompletedProjectsSlider() {
  const swiperRef = useRef();
  const { projects } = useCompletedProjects();
  const [activeButton, setActiveButton] = useState("");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sortedProjects = projects
    .slice()
    .sort((a, b) => {
      const parseDate = (dateStr) => {
        const [day, month, year, hours, minutes, seconds] = dateStr
          .split(/[\s.:]/)
          .map(Number);
        return new Date(year, month - 1, day, hours, minutes, seconds).getTime();
      };

      return parseDate(a.date) - parseDate(b.date);
    })
    .slice(0, 10);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
    setActiveButton("prev");
    setTimeout(() => setActiveButton(""), 300);
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
    setActiveButton("next");
    setTimeout(() => setActiveButton(""), 300);
  };

  if (sortedProjects.length > 0)
    return (
      <div className={styles.sliderContainer}>
        <div className={styles.header}>
          <h2>Проекты внедрения</h2>
          <div className={styles.desktopButtonContainer}>
            <SwitchButtons
              activeButton={activeButton}
              handlePrev={handlePrevClick}
              handleNext={handleNextClick}
            />
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
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1601: { slidesPerView: 1.5, spaceBetween: 20 },
              1441: { slidesPerView: 1.3, spaceBetween: 10 },
              1025: { slidesPerView: 1.2, spaceBetween: 10 },
              639: { slidesPerView: 1.03, spaceBetween: 16 },
              600: { slidesPerView: 1.5, spaceBetween: 10 },
              450: { slidesPerView: 1.3, spaceBetween: 10 },
              300: { slidesPerView: 1.05, spaceBetween: 10 },
            }}
          >
            {sortedProjects.map((prj, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={prj.image}
                      alt={prj.title}
                      width={300}
                      height={200}
                      loading="lazy"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.titleContainer}>
                      <div className={styles.data}>
                        <ConvertedDate date={prj.data} />
                      </div>
                      {prj.tag && <div className={styles.tag}>{prj.tag}</div>}
                      <div className={styles.title}>{prj.title}</div>
                    </div>
                    <TruncatedText prj={prj} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.mobileButtons}>
          <SwitchButtons
            activeButton={activeButton}
            handlePrev={handlePrevClick}
            handleNext={handleNextClick}
          />
        </div>
      </div>
    );
  return null;
}

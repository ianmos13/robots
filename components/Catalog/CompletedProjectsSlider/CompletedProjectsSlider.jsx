"use client";

import SwitchButtons from "@/components/UI/Buttons/SwitchButtons/SwitchButtons";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CompletedProjectsSlider.module.scss";
import useConvertedDate from "@/hooks/useConvertedDate";
import useCompletedProjects from "@/hooks/useCompletedProjects";
import Link from 'next/link'


// function randomDate() {
//   const start = new Date(2020, 0, 1).getTime();
//   const end = new Date(2030, 11, 31).getTime();
//   const randomTime = start + Math.random() * (end - start);
//   const date = new Date(randomTime);
//   const pad = (n) => (n < 10 ? "0" + n : n);
//   const day = pad(date.getDate());
//   const month = pad(date.getMonth() + 1);
//   const year = date.getFullYear();
//   const hours = pad(date.getHours());
//   const minutes = pad(date.getMinutes());
//   const seconds = pad(date.getSeconds());
//   return {
//     formatted: `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`,
//     timestamp: randomTime,
//   };
// }

// const allProjects = Array.from({ length: 100 }, (_, i) => {
//   const rd = randomDate();
//   return {
//     title: "Замена роботов и оптимизация линии упаковки сахара",
//     "detailsH2.takeOfferText":
//       "Промышленная автоматизация стала ключевым:&lt;/h2&gt;\r\nфактором в современной промышленности, стремительно преобразуя производственные процессы и повышая эффективность работы предприятий. Одним из наиболее важных элементов автоматизации являются промышленные роботы, которые становятся неотъемлемой частью многих производственных линий. В этой статье мы рассмотрим роль роботов в промышленной автоматизации и их влияние на повышение эффективности и точности производства.&lt;br&gt;\r\n&lt;h2&gt;H2. Преимущества роботизации в промышленности:&lt;/h2&gt;\r\n Промышленные роботы предоставляют ряд преимуществ, которые делают их незаменимым инструментом в автоматизации производства:&lt;br&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;Повышение производительности: Роботы способны работать непрерывно и выполнять повторяющиеся задачи с высокой скоростью, что приводит к существенному повышению производительности и сокращению времени цикла производства.&lt;/li&gt;\r\n\t&lt;li&gt;Улучшение качества: Роботы обладают высокой точностью и повторяемостью движений, что исключает человеческий фактор и гарантирует однородное качество продукции.&lt;/li&gt;\r\n\t&lt;li&gt;Снижение рисков: Автоматизация с помощью роботов позволяет уменьшить риск производственных травм и создать безопасные условия для работы персонала.&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;h2&gt;H3. Преимущества продукта&lt;/h2&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;Высокое качество и эстетику лицевых сварочных швов;&lt;/li&gt;\r\n\t&lt;li&gt;Высокое качество и эстетику лицевых сварочных швов;&lt;/li&gt;\r\n\t&lt;li&gt;Высокое качество и эстетику лицевых сварочных швов;&lt;/li&gt;\r\n\t&lt;li&gt;Высокое качество и эстетику лицевых сварочных швов;&lt;/li&gt;\r\n\t&lt;li&gt;Высокое качество и эстетику лицевых сварочных швов;&lt;/li&gt;\r\n&lt;/ul&gt;",
//     image: "images/completed-project-catalog.svg",
//     data: rd.formatted,
//     timestamp: rd.timestamp,
//     slug: `project-${i + 1}`,
//   };
// });


// const projects = allProjects
//   .sort((a, b) => b.timestamp - a.timestamp)
//   .slice(0, 10);

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
            <Link
              href={`/our-projects/${prj.slug}`}
              className={styles.mobileRead}
            >
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
    const { projects, error, loading } = useCompletedProjects();
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

    return  parseDate(a.date)-parseDate(b.date) ; 
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
          <h2> Проекты внедрения </h2>
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
              1601: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1441: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              1025: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              639: {
                slidesPerView: 1.03,
                spaceBetween: 16,
              },
              600: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              450: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              300: {
                slidesPerView: 1.05,
                spaceBetween: 10,
              },
            }}
          >
            {sortedProjects.map((prj, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <div className={styles.imageContainer}>
                    <img
                      loading="lazy"
                      src={prj.image}
                      alt={prj.title}
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
}

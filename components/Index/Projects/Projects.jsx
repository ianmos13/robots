"use client";

import { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import LoadMoreButton from "@/components/UI/Buttons/LoadMoreButton/LoadMoreButton";
import useDeviceType from "@/hooks/useDeviceType";
const projectData = [
  {
    id: 1,
    image: "/images/projects.svg",
    title:
      "На мебельное производство в г. Казань был установлен роботизированный сварочный комплекс CROBOTR",
    date: "Сентябрь 2024",
    tags: ["Предприятия по производству мебели"],
  },
  {
    id: 2,
    image: "/images/projects.svg",
    title:
      "Роботизированный сварочный комплекс для электроснабжения и освещения",
    date: "Март 2024",
    tags: ["Электроснабжение и освещение"],
  },
  {
    id: 3,
    image: "/images/projects.svg",
    title: "Роботизированная ячейка для транспортных и спец. техник",
    date: "Июнь 2024",
    tags: ["Транспорт и спец. техника"],
  },
  {
    id: 4,
    image: "/images/projects.svg",
    title: "Автоматизация сварки в нефтегазовой отрасли",
    date: "Август 2024",
    tags: ["Нефтегазовая отрасль"],
  },
  {
    id: 5,
    image: "/images/projects.svg",
    title:
      "Установка робота для объектов отопления, водоснабжения и вентиляции",
    date: "Январь 2025",
    tags: ["Отопление, водоснабжение, вентиляция"],
  },
  {
    id: 6,
    image: "/images/projects.svg",
    title: "Автоматизация производства металлоконструкций",
    date: "Апрель 2025",
    tags: ["Металлоконструкции"],
  },
  {
    id: 7,
    image: "/images/projects.svg",
    title:
      "Роботизированная сварка для благоустройства городов и спортивного инвентаря",
    date: "Май 2025",
    tags: ["Благоустройство городской среды и спорт инвентарь"],
  },
  {
    id: 8,
    image: "/images/projects.svg",
    title: "Сварочный пост для строительных конструкций и элементов",
    date: "Июль 2025",
    tags: ["Строительные конструкции и элементы"],
  },
];

const allTags = [
  "Все",
  "Предприятия по производству мебели",
  "Электроснабжение и освещение",
  "Транспорт и спец. техника",
  "Нефтегазовая отрасль",
  "Отопление, водоснабжение, вентиляция",
  "Металлоконструкции",
  "Благоустройство городской среды и спорт инвентарь",
  "Строительные конструкции и элементы",
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("Все");
  const [itemsToShow, setItemsToShow] = useState(3);

  const { isTabletView, isMobileView } = useDeviceType();


  useEffect(() => {
    setItemsToShow(isMobileView ? 2 : isTabletView ? 2 : 3);
  }, [isTabletView, isMobileView]);

  const filteredProjects =
    selectedTag === "Все"
      ? projectData
      : projectData.filter((proj) => proj.tags.includes(selectedTag));

  const visibleProjects = filteredProjects.slice(0, itemsToShow);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setItemsToShow(isMobileView ? 1 : isTabletView ? 2 : 3);
  };

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + (isMobileView ? 1 : isTabletView ? 2 : 3));
  };

  return (
    <section className={styles.container}>
      <div className={styles.projectsContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Реализованные проекты с&nbsp;применением промышленных роботов CRP
          </h2>

          {!isMobileView ? (
            <div className={styles.tags}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={tag === selectedTag ? styles.activeTag : ""}
                >
                  {tag}
                </button>
              ))}
            </div>
          ) : (
            <select
              value={selectedTag}
              onChange={(e) => handleTagClick(e.target.value)}
              className={styles.dropdown}
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          )}
        </div>
       

        <div className={styles.projectsList}>
          {visibleProjects.map((project) => {
            const cardTag = project.tags[0] || "";
            return (
              <div className={styles.projectCard} key={project.id}>
                <div className={styles.imageContainer}>
                  <img src={project.image} alt={project.title} />
                  {cardTag && <div className={styles.tagBadge}>{cardTag}</div>}
                </div>

                <div className={styles.projectInfo}>
                  <p className={styles.projectDate}>{project.date}</p>
                  <div>{project.title}</div>
                </div>
              </div>
            );
          })}
        </div>

        {itemsToShow < filteredProjects.length && (
       <div className={styles.loadButtonContainer}>
       <div className={styles.loadButton}>
         <LoadMoreButton onClick={handleShowMore} />
       </div>
     </div>
        )}
      </div>
    </section>
  );
}

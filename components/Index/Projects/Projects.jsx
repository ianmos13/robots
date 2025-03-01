"use client";

import { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import LoadMoreButton from "@/components/UI/Buttons/LoadMoreButton/LoadMoreButton";
import useDeviceType from "@/hooks/useDeviceType";
import ProjectCard from "@/components/UI/ProjectCard/ProjectCard";
import useCompletedProjects from "@/hooks/useCompletedProjects";
import useConvertedDate from "@/hooks/useConvertedDate";

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
  const { projects, error, loading } = useCompletedProjects();
  const { isTabletView, isMobileView } = useDeviceType();


  useEffect(() => {
    setItemsToShow(isMobileView ? 2 : isTabletView ? 2 : 3);
  }, [isTabletView, isMobileView]);

  const filteredProjects =
    selectedTag === "Все"
      ? projects
      : projects.filter((proj) => proj.tags.includes(selectedTag));

  const visibleProjects = filteredProjects.slice(0, itemsToShow);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setItemsToShow(isMobileView ? 1 : isTabletView ? 2 : 3);
  };

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + (isMobileView ? 1 : isTabletView ? 2 : 3));
  };

  if (projects.length > 0) return (
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
          {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                date={useConvertedDate(project.date)}
                tags={project.tags}
                slug={project.slug}
            />
          ))}
        </div>

        {itemsToShow < filteredProjects.length && (
       <div className={styles.loadButtonContainer}>
       <div className={styles.loadButton}>
         <LoadMoreButton onClick={handleShowMore} theme={'white'} />
       </div>
     </div>
        )}
      </div>
    </section>
  );
}

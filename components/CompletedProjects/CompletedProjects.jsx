"use client";

import { useState } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import styles from "./CompletedProjects.module.scss";
import Pagination from "@/components/UI/Pagination/Pagination";
import useCompletedProjects from "@/hooks/useCompletedProjects";
import ProjectCard from "@/components/UI/ProjectCard/ProjectCard";
import useConvertedDate from "@/hooks/useConvertedDate";

export default function CompletedProjects({ title }) {
  const { isTabletView, isMobileView } = useDeviceType();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isMobileView ? 3 : isTabletView ? 6 : 9;

  const { projects, error, loading } = useCompletedProjects();

  const totalPages = Math.ceil(projects.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.container}>
      <div className={styles.projectsContainer}>
        <h3>{title}</h3>
        {projects?.length > 0 && (
          <>
            <div className={styles.projectsList}>
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  tags={project.tags}
                  date={useConvertedDate(project.date)}
                  slug={project.slug}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                newsPageTheme={true}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}

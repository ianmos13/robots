"use client";
import Article from "@/components/Article/Article";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import React from "react";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
import useCompletedProjects from "@/hooks/useCompletedProjects";

export default function page() {
  const { projects, error, loading } = useCompletedProjects();
  const { id } = useParams();
   const newsSlug = id; 
   const projectData = projects?.find((news) => news.slug === newsSlug);
   const projectTitle = projectData?.title;
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Реализованные проекты", link: "/our-projects" },
    { label: projectTitle, link: "" },
  ];
  const backButtonOptions = {
      link: "/our-projects",
      title: {
        small: "К\u00A0проектам",
        large: "Вернуться\u00A0к\u00A0проектам"
      }}
  return (
   <>
     <Breadcrumbs items={breadcrumbItems} />
     <Article data={projectData} backButtonOptions={backButtonOptions} />
     <ContactUs />
   </>
  );
}

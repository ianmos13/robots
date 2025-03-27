"use client";

import React from "react";
import Article from "@/components/Article/Article";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import ContactUs from "@/components/UI/ContactUs/ContactUs";

export default function CompletedProjectPageClient({ projectData }) {
  const projectTitle = projectData?.title;
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Реализованные проекты", link: "/our-projects" },
    { label: projectTitle, link: "" },
  ];

  const backButtonOptions = {
    link: "/our-projects",
    title: {
      small: "К проектам",
      large: "Вернуться к проектам",
    },
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <Article data={projectData} backButtonOptions={backButtonOptions} />
      <ContactUs />
    </>
  );
}

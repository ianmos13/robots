"use client";

import React from "react";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Article from "@/components/Article/Article";
import ContactUs from "@/components/UI/ContactUs/ContactUs";

export default function SingleNewsPageClient({ singleNewsData }) {
  const singleNewsTitle = singleNewsData?.title;

  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Новости", link: "/articles" },
    { label: singleNewsTitle, link: "" },
  ];

  const backButtonOptions = {
    link: "/articles",
    title: {
      small: "К новостям",
      large: "Вернуться к новостям"
    }
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <Article data={singleNewsData} backButtonOptions={backButtonOptions} />
      <ContactUs />
    </>
  );
}

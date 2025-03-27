"use client";

import React from "react";
import Article from "@/components/Article/Article";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import ContactUs from "@/components/UI/ContactUs/ContactUs";

export default function BlogPageClient({ blogItem }) {
  const itemTitle = blogItem?.title;
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Блог", link: "/blog" },
    { label: itemTitle, link: "" },
  ];
  const backButtonOptions = {
    link: "/blog",
    title: {
      small: "К блогу",
      large: "Вернуться к блогу",
    },
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <Article data={blogItem} backButtonOptions={backButtonOptions} />
      <ContactUs />
    </>
  );
}

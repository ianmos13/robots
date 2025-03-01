"use client";
import Article from "@/components/Article/Article";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import React from "react";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
import useBlog from "@/hooks/useBlog";

export default function page() {
  const { blog, error, loading } = useBlog();
  const { id } = useParams();
   const itemSlug = id;
   const itemData = blog?.find((item) => item.slug === itemSlug);
   const itemTitle = itemData?.title;
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Блог", link: "/blog" },
    { label: itemTitle, link: "" },
  ];
  const backButtonOptions = {
    link: "/blog",
    title: {
        small: "К\u00A0блогу",
        large: "Вернуться\u00A0к\u00A0блогу"
    }}
  return (
   <>
     <Breadcrumbs items={breadcrumbItems} />
     <Article data={itemData} backButtonOptions={backButtonOptions}  />
     <ContactUs />
   </>
  );
}

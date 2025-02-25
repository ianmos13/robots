"use client";
import Article from "@/components/Article/Article";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import React from "react";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
import useNews from "@/hooks/useNews";

export default function page() {
  const { news, error, loading } = useNews();
  const { id } = useParams();
   const newsSlug = id; 
   const singleNewsData = news?.find((news) => news.slug === newsSlug);
   const singleNewsTitle = singleNewsData?.title;
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Новости", link: "/articles" },
    { label: singleNewsTitle, link: "" },
  ];
  const backButtonOptions = {
    link: "/articles",
    title: {
        small: "К\u00A0новостям",
        large: "Вернуться\u00A0к\u00A0новостям"
    }}
  return (
   <>
     <Breadcrumbs items={breadcrumbItems} />
     <Article data={singleNewsData} backButtonOptions={backButtonOptions}  />
     <ContactUs />
   </>
  );
}

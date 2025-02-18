"use client";
import SingleNews from "@/components/SingleNews/SingleNews";
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
    { label: "Новости", link: "/news" },
    { label: singleNewsTitle, link: "" },
  ];
  return (
   <>
     <Breadcrumbs items={breadcrumbItems} />
     <SingleNews data={singleNewsData} />
     <ContactUs />
   </>
  );
}

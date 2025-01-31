"use client";
import SingleNews from "@/components/SingleNews/SingleNews";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import newsData from "@/public/data/news.json";

export default function page() {
  const { id } = useParams();
   const newsSlug = id; 
   const singleNewsData = newsData?.find((news) => news.slug === newsSlug);
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
   </>
     
  
  );
}

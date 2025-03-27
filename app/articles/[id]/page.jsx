import { notFound } from "next/navigation";
import SingleNewsPageClient from "./SingleNewsPageClient";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API;
const API_AUTH = process.env.NEXT_PUBLIC_API_AUTH;

async function fetchData(endpoint, method = "GET") {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: {
      Auth: API_AUTH,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error fetching data");
  }
  return response.json();
}


async function getAllNews() {
  const data = await fetchData("news", "GET"); 
  return data?.data || [];
}


async function getNewsBySlug(slug) {
  const allNews = await getAllNews();
  return allNews.find((item) => item.slug === slug);
}


export async function generateMetadata({ params }) {
  const { id } = params;
  let singleNewsData;

  try {
    singleNewsData = await getNewsBySlug(id);
  } catch (error) {
    console.error("Ошибка получения данных новости:", error);
  }

  if (!singleNewsData) {
    return {
      title: "Новость не найдена",
      description: "",
    };
  }

  return {
    title: singleNewsData.meta_title || singleNewsData.title,
    description: singleNewsData.meta_description || "",
    keywords: singleNewsData.meta_keywords,
  };
}


export default async function Page({ params }) {
  const { id } = params;
  const singleNewsData = await getNewsBySlug(id);

  if (!singleNewsData) {
    notFound(); 
  }


  return <SingleNewsPageClient singleNewsData={singleNewsData} />;
}

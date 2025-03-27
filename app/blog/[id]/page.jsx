import { notFound } from "next/navigation";
import BlogPageClient from "./BlogPageClient";

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


async function getBlogBySlug(slug) {
  const data = await fetchData("news", "GET"); 
  const blogs = data?.data || [];
  const filteredItems = blogs.filter((item) => item.type === "blog");
  return filteredItems.find((item) => item.slug === slug);
}


export async function generateMetadata({ params }) {
  const { id } = params;
  let blogItem;
  try {
    blogItem = await getBlogBySlug(id);
  } catch (error) {
    console.error("Ошибка получения данных статьи для метаданных:", error);
  }

  if (!blogItem) {
    return {
      title: "Статья не найдена",
      description: "",
    };
  }

  return {
    title: blogItem.meta_title || blogItem.title,
    description: blogItem.meta_description || "",
    keywords: blogItem.meta_keywords,
  };
}

export default async function Page({ params }) {
  const { id } = params;
  const blogItem = await getBlogBySlug(id);
  if (!blogItem) notFound();

  return <BlogPageClient blogItem={blogItem} />;
}

import { notFound } from "next/navigation";
import CompletedProjectPageClient from "./CompletedProjectPageClient";

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

async function getProjectBySlug(slug) {
  const data = await fetchData("news", "GET");
  const projects = data?.data || [];
  const filteredItems = projects.filter((item) => item.type === "project");
  return filteredItems.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }) {
  const { id } = params;
  let projectData;
  try {
    projectData = await getProjectBySlug(id);
  } catch (error) {
    console.error("Ошибка получения данных проекта для метаданных:", error);
  }
  if (!projectData) {
    return {
      title: "Проект не найден",
      description: "",
    };
  }
  return {
    title: projectData.meta_title || projectData.title,
    description: projectData.meta_description || "",
    keywords: projectData.meta_keywords,
  };
}

export default async function Page({ params }) {
  const { id } = params;
  const projectData = await getProjectBySlug(id);
  if (!projectData) notFound();
  return <CompletedProjectPageClient projectData={projectData} />;
}

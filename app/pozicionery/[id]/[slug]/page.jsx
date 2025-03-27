import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";

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

async function getProductBySlug(slug) {
  const data = await fetchData("product", "GET");
  const products = data?.data || [];
  return products.find((product) => product.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  let productData;
  try {
    productData = await getProductBySlug(slug);
  } catch (error) {
    console.error("Ошибка получения данных продукта для метаданных:", error);
  }

  if (!productData) {
    return {
      title: "Продукт не найден",
      description: "",
    };
  }

  return {
    title: productData.meta_title || productData.title,
    description: productData.meta_description || "",
    keywords: productData.meta_keywords,
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const productData = await getProductBySlug(slug);
  if (!productData) notFound();


  return (
    <ProductPageClient
      productData={productData}
     
    />
  );
}

"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Products from "@/components/Products/Products";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import productsData from "../../../public/data/products.json";

export default function Page() {
  const { id } = useParams();
  const productId = parseInt(id, 10); 
  const productData = productsData?.find((product) => product.id === productId); 
  const productName = productData?.title;

  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Каталог", link: "/catalog" },
    { label: productName, link: "" },
  ];


  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <Products productData={productData} />
    </div>
  );
}

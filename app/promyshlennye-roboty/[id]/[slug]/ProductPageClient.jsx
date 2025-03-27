"use client";

import React from "react";
import Products from "@/components/Products/Products";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import useCategories from "@/hooks/useCategories";

export default function ProductPageClient({ productData }) {
  const { categories } = useCategories(true);
  const productName = productData?.title;
  
  const currentCategory = categories.find(
    (category) =>
      category?.key?.toString() === productData?.category?.toString()
  );
  const parentCategory = categories.find(
    (category) =>
      category?.key?.toString() === currentCategory?.parent?.toString()
  );
  
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Промышленные роботы", link: "/promyshlennye-roboty" },
    { label: currentCategory?.name, link: currentCategory?.link },
    { label: productName, link: "" },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <Products productData={productData} parentCategory={parentCategory} />
    </div>
  );
}

"use client"

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Catalog from "@/components/Catalog/Catalog";
import useCategories from "@/hooks/useCategories";

export default function page() {
  const { categories } = useCategories(true);
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Категории позиционеров", link: "/pozicionery" },
  ];
  return (
    <Suspense fallback={<div>Loading catalog...</div>}>
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <Catalog categories={categories} title={"Каталог позиционеров"} />
    </div>
    </Suspense>
  );
}

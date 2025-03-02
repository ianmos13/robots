"use client";

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Catalog from "@/components/Catalog/Catalog";
import useCategories from "@/hooks/useCategories";
import {useParams} from "next/navigation";

export default function page() {
  const { id } = useParams();
  const { categories } = useCategories(true);

  const currentCategory = categories.find((category) => category?.link?.toString() === `/pozicionery/${id?.toString()}/`);
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Позиционеры", link: "/pozicionery" },
    { label: currentCategory?.name, link: currentCategory?.link },
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

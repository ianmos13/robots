"use client";

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Catalog from "@/components/Catalog/Catalog";
import useCategories from "@/hooks/useCategories";

export default function PromRobotsPage() {
  const { categories } = useCategories(true);
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Промышленные роботы", link: "/promyshlennye-roboty" },
  ];
  
  return (
    <Suspense fallback={<div>Loading catalog...</div>}>
      <div>
        <Breadcrumbs items={breadcrumbItems} />
        <Catalog
          categories={categories}
          title={"Каталог промышленных роботов"}
        />
      </div>
    </Suspense>
  );
}

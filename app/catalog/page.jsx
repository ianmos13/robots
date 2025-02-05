import React, { Suspense } from "react";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Catalog from "@/components/Catalog/Catalog";
export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Каталог роботов", link: "" },
  ];
  return (
    <Suspense fallback={<div>Loading catalog...</div>}>
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <Catalog />
    </div>
    </Suspense>
  );
}

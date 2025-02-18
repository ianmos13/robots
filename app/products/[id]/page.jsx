"use client";

import { useParams } from "next/navigation";
import Products from "@/components/Products/Products";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import useProducts from "@/hooks/useProducts";

export default function Page() {
  const { products, error, loading } = useProducts();
  const { id } = useParams();
  const productData = products?.find((product) => product.id === id);
  const productName = productData?.title;
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Каталог", link: "/catalog" },
    { label: productName, link: "" },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <Products productData={products} />
    </div>
  );
}

'use client';

import { useParams } from "next/navigation";
import Products from "@/components/Products/Products";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import useProducts from "@/hooks/useProducts";
import useCategories from "@/hooks/useCategories";

export default function Page() {
  const { products } = useProducts();
  const { categories } = useCategories(true);
  const { id,  slug } = useParams(); 

 
  const productData = products?.find((product) => product.slug === slug);
  const productName = productData?.title;
  const currentCategory = categories.find(
    (category) => category?.key?.toString() === productData?.category?.toString()
  );
  const parentCategory = categories.find(
    (category) => category?.key?.toString() === currentCategory?.parent?.toString()
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

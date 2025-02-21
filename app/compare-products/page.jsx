import CompareProducts from "@/components/CompareProducts/CompareProducts";
import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Сравнение товаров", link: "" },
  ];
  return (
    <>
      {" "}
      <Breadcrumbs items={breadcrumbItems} />
      <CompareProducts />
      <ContactUs />
    </>
  );
}

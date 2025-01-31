import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Catalog from "@/components/Catalog/Catalog";
export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Каталог роботов", link: "/catalog" },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <Catalog />
    </div>
  );
}

import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import News from "@/components/News/News";
export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Новости", link: "" },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbItems}/>
      <News />
    </div>
  );
}

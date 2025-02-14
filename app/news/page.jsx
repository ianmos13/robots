import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import News from "@/components/News/News";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Новости", link: "" },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbItems}/>
      <News />
      <ContactUs />
    </div>
  );
}

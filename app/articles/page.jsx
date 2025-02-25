import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Articles from "@/components/Articles/Articles";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Новости", link: "" },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbItems}/>
      <Articles title={"Новости"}/>
      <ContactUs />
    </div>
  );
}

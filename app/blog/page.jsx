import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import Blog from "@/components/Blog/Blog";
import ContactUs from "@/components/UI/ContactUs/ContactUs";

export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Блог", link: "" },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbItems}/>
      <Blog title={"Блог"}/>
      <ContactUs />
    </div>
  );
}

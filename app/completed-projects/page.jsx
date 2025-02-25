import Breadcrumbs from "@/components/UI/Breadcrumbs/Breadcrumbs";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
import CompletedProjects from "@/components/CompletedProjects/CompletedProjects";
export default function page() {
  const breadcrumbItems = [
    { label: "Главная", link: "/" },
    { label: "Реализованные проекты", link: "" },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbItems}/>
      <CompletedProjects title={"Реализованные проекты"} />
      <ContactUs />
    </div>
  );
}

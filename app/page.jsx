import MainBanner from "@/components/Index/MainBanner/MainBanner";
import ProductCategories from "@/components/Index/ProductCategories/ProductCategories";
import TestIndustryRobots from "@/components/Index/TestIndustryRobots/TestIndustryRobots";
import CrpAutomation from "@/components/Index/CrpAutomation/CrpAutomation";
import Projects from "@/components/Index/Projects/Projects";
import LeaveRequestBanner from "@/components/UI/LeaveRequestBanner/LeaveRequestBanner";
import ProductCategoryGridSlider from "@/components/UI/ProductCategoryGridSlider/ProductCategoryGridSlider"
import ProductCategoryGridPagination from "@/components/UI/ProductCategoryGridPagination/ProductCategoryGridPagination";
import LeasingPartners from "@/components/Index/LeasingPartners/LeasingPartners";
import NewsIndex from "@/components/Index/News/NewsIndex";
import ContactUs from "@/components/UI/ContactUs/ContactUs";
import styles from "@/styles/Home.module.scss"
export default function Home() {
  return (
    <>
      <MainBanner />
      <ProductCategories />
      <TestIndustryRobots />
      <CrpAutomation />
      <Projects />
      <LeaveRequestBanner theme="white" />
      <ProductCategoryGridSlider />
      <div className={styles.productPaginationGridContaner}>
      <ProductCategoryGridPagination />
      </div>
     
      <LeaveRequestBanner />
      <LeasingPartners />
      <NewsIndex />
      <ContactUs />
    </>
  );
}

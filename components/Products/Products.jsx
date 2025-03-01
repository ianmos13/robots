import ProductSlider from "./ProductSlider/ProductSlider";
import MoreInfo from "./MoreInfo/MoreInfo";
import styles from "./Products.module.scss";
import ContactUs from "@/components/UI/ContactUs/ContactUs";

export default function Products({ productData, parentCategory }) {

  if(!productData) return null;

  return (
    <section className={styles.container}>
      <ProductSlider productInfo={productData} />
      <MoreInfo productInfo={productData} parentCategory={parentCategory} />
      <ContactUs theme={"products"} />
    </section>
  );
}

import ProductSlider from "./ProductSlider/ProductSlider";
import MoreInfo from "./MoreInfo/MoreInfo";
import styles from "./Products.module.scss";
import ContactUs from "@/components/UI/ContactUs/ContactUs";

export default function Products({ productData }) {

  if(!productData) return null;

  return (
    <section className={styles.container}>
      <ProductSlider productInfo={productData} />
      <MoreInfo productInfo={productData} />
      <ContactUs theme={"products"} />
    </section>
  );
}

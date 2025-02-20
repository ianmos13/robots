import ProductSlider from "./ProductSlider/ProductSlider";
import MoreInfo from "./MoreInfo/MoreInfo";
import styles from "./Products.module.scss";

export default function Products({ productData }) {

  if(!productData) return null;

  return (
    <section className={styles.container}>
      <ProductSlider productInfo={productData} />
      <MoreInfo productInfo={productData} />
    </section>
  );
}

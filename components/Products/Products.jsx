import ProductSlider from "./ProductSlider/ProductSlider"
import MoreInfo from "./MoreInfo/MoreInfo";
import styles from "./Products.module.scss";
import FloatingIcons from "@/components/UI/FloatingIcons/FloatingIcons";
export default function Products({productData}) {
    return (
        <section className={styles.container}>
              <FloatingIcons />
            <ProductSlider images={productData.images} productInfo={productData}/>
            <MoreInfo productInfo={productData} />
            </section>
    )
}
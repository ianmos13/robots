import ProductSlider from "./ProductSlider/ProductSlider"
import MoreInfo from "./MoreInfo/MoreInfo";
import styles from "./Products.module.scss";

export default function Products({productData}) {
    return (
        <section className={styles.container}>
            <ProductSlider images={productData.images} productInfo={productData}/>
            <MoreInfo productInfo={productData} />
        </section>
    )
}
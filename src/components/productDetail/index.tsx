import { useParams } from "react-router"
import { productData } from "../../data"
import PageContainer from "../../Pagecontainer"
import styles from "./style.module.css"
import PurpleButton from "../PurpleButton"
const ProductDetail = () => {
    const { title } = useParams()
    const thisProduct = productData.find(prod => prod.title === title)
    return (
        <PageContainer>
            <div className="container">
                <div className={styles.product_detail_page}>
                    <div className={styles.cardItem_image}><img src={thisProduct.image} alt={thisProduct.title} /></div>

                    <div className={styles.product_detail_info}>
                        <h3 className={styles.cardItem_title}>{thisProduct.title}</h3>
                        <p className={styles.cardItem_description}>{thisProduct.description}</p>
                        <div className={styles.cardItem_price}>{thisProduct.price} AZN</div>
                        <PurpleButton title="Səbətə əlavə et" />
                    </div>
                </div>
            </div>
        </PageContainer>

    )
}

export default ProductDetail
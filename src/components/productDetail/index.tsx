import { useParams } from "react-router"
import { productData, productDataType } from "../../data"
import PageContainer from "../../Pagecontainer"
import styles from "./style.module.css"
import PurpleButton from "../PurpleButton"
import { useDispatch } from "react-redux"

import { addToCart } from "../../slices/cartSlice";
import Swal from "sweetalert2"


const ProductDetail = () => {
    const { title } = useParams()
    const thisProduct = productData.find(prod => prod.title === title)
    const dispatch = useDispatch();

    const onAddToCart = (product: productDataType) => {
        dispatch(addToCart(product));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Məhsul əlavə edildi",
            showConfirmButton: false,
            timer: 1500
        });
    };
    return (
        <PageContainer>
            <div className="container">

                {thisProduct ? (
                    <div className={styles.product_detail_page}>
                        <div className={styles.cardItem_image}><img src={thisProduct.image} alt={thisProduct.title} /></div>
                        <div className={styles.product_detail_info}>
                            <h3 className={styles.cardItem_title}>{thisProduct.title}</h3>
                            <p className={styles.cardItem_description}>{thisProduct.description}</p>
                            <div className={styles.cardItem_price}>{thisProduct.price} AZN</div>
                            <PurpleButton title="Səbətə əlavə et" onClick={() => onAddToCart(thisProduct)} />
                        </div>
                    </div>
                ) : (
                    <p>Məhsul tapılmadı</p>
                )}

            </div>

        </PageContainer>

    )
}

export default ProductDetail
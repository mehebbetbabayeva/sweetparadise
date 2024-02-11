import PageContainer from "../../Pagecontainer"
import { FaSearch } from "react-icons/fa";
import styles from "./style.module.css"
import { useState } from "react"
import { productData, productDataType } from "../../data";
import CardItem from "../../components/CardItem";
import { Link } from "react-router-dom"
import PurpleButton from "../../components/PurpleButton";

import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import Swal from "sweetalert2";

const Products = () => {
    const [search, setsearch] = useState("")
    const filteredProducts = productData.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
    );

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
                <div className={styles.center}>
                    <form className={styles.form_register}>
                        <div className={styles.input_group}>
                            <span> <FaSearch /> </span>
                            <input type="text" placeholder=" Axtar" value={search} onChange={(e) => {
                                setsearch(e.target.value)
                            }} />
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.productContainer}>
                {filteredProducts.map((product) => (
                    <div className={styles.card} key={product.id} ><Link to={`/kataloq/${product.title}`}>
                        <CardItem

                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        /></Link>
                        <PurpleButton title="Səbətə əlavə et" onClick={() => onAddToCart(product)} />
                    </div>
                ))}
            </div>
        </PageContainer>


    )
}

export default Products
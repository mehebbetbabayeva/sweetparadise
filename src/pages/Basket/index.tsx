import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./style.module.css"
import CartItemsCard, { Product } from "../../components/CartItemsCard";
import PageContainer from "../../Pagecontainer";
import Swal from "sweetalert2";
import { productDataType } from "../../data";

const getTotal = (cartItem: productDataType[]) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.forEach((item) => {
        totalQuantity += item.quantity!;
        totalPrice += item.price! * item.quantity!;
    });
    return { totalPrice, totalQuantity };
};

const Basket = () => {

    const cartItem = useSelector((state: RootState) => state.cartReducer.cart);
    const quantity = getTotal(cartItem).totalQuantity;
    const price = getTotal(cartItem).totalPrice;

    const alertSwal = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Bəzi şeylər səhv getdi!",

        });
    }
    return (
        <PageContainer>
            <div className="container">
                <div className={styles.basket_card}>
                    {cartItem?.map((item) => (
                        <CartItemsCard product={item as Product} />
                    ))}
                </div>
                <div className={styles.checkout_details} >
                    <span >Sifariş detalları</span>

                    <span >
                        Ümumi say : <span > {quantity}</span>
                    </span>
                    <span >
                        Ümumi məbləğ: {price} AZN

                    </span>

                    <div >

                        <button className={cartItem.length > 0 ? "" : styles.disabled} onClick={alertSwal}>

                            Ödəniş et</button>

                    </div>
                </div>
            </div>
        </PageContainer>
    )
}


export default Basket
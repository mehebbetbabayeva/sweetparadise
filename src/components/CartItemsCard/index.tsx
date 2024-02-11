import { Minus, Plus, Trash } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    removeItem,
} from "../../slices/cartSlice";
import styles from "./style.module.css"





const CartItemsCard = ({ product }: any) => {


    const dispatch = useDispatch();

    const onIncreaseQuantity = (productId: number) => {
        dispatch(increaseQuantity({ id: productId }));
    };

    const onDecreaseQuantity = (productId: number) => {
        dispatch(decreaseQuantity({ id: productId }));
    };

    const onRemoveItem = (productId: number) => {
        dispatch(removeItem({ id: productId }));
    };

    return (
        <div className={styles.card_container} >
            <div className={styles.card_item}>
                <div className={styles.card_img}>
                    <img

                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <div className={styles.card_info} >
                    <h3 >{product.title}</h3>
                    <h3 >
                        {product.price * product.quantity} AZN
                    </h3>
                    <h3 >
                        Say: {product.quantity}
                    </h3>
                </div>
            </div>

            <div className={styles.card_btns}>
                <button
                    onClick={() => onIncreaseQuantity(product.id)}
                    title="Increase quantity"

                >
                    <Plus />
                </button>

                <button
                    onClick={() => onDecreaseQuantity(product.id)}
                    title="Decrease Quantity"

                >
                    <Minus />
                </button>
                <button
                    onClick={() => onRemoveItem(product.id)}
                    title="Remove item from cart"

                >
                    <Trash />
                </button>
            </div>
        </div>
    );
};

export default CartItemsCard;
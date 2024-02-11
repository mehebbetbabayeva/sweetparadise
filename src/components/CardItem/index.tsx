import { productDataType } from "../../data"

import styles from "./style.module.css"


const CardItem = ({ image, title, description, price }: productDataType) => {

    return (
        <div className={styles.cardItem}>
            <div className={styles.cardItem_image}><img src={image} alt={title} /></div>
            <h3 className={styles.cardItem_title}>{title}</h3>
            <p className={styles.cardItem_description}>{description}</p>
            <div className={styles.cardItem_price}>{price} AZN</div>
        </div>
    )
}

export default CardItem
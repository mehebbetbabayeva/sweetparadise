

import styles from "./style.module.css"

interface CardItemProps {
    image: string;
    title: string;
    description: string;
    price: number;
}
const CardItem: React.FC<CardItemProps> = ({ image, title, description, price }) => {

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
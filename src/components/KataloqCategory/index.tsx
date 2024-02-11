import { useEffect, useState } from "react";
import styles from "./style.module.css";
import ekler from "../../assets/images/ekler1.jpg";
import macaron from "../../assets/images/makaron1.jpg";
import cupcake from "../../assets/images/cupcake Visneli.png";
import maffin from "../../assets/images/muffin1.jpg";
import donut from "../../assets/images/donut1.jpg";
import { productData, productDataType } from "../../data";
import CardItem from "../CardItem";
import PurpleButton from "../PurpleButton"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./kataloq.css"

import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import Swal from "sweetalert2";
interface carouselDataType {
    img: string,
    category: string,
    title: string,
}
const carouselData: carouselDataType[] = [
    { img: ekler, category: "ekler", title: "Ekler" },
    { img: macaron, category: "makaron", title: "Macaron" },
    { img: cupcake, category: "cupcake", title: "Cupcake" },
    { img: maffin, category: "maffin", title: "Maffin" },
    { img: donut, category: "donut", title: "Donut" },
];

const KataloqCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState("cupcake");
    const handleItemClick = (mycategory: string) => {
        setSelectedCategory(mycategory);
    };
    const filteredProducts = productData.filter((product) => {
        return product.category === selectedCategory
    });
    const [slidesPerView, setSlidesPerView] = useState(5);
    const updateSlidesPerView = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 553) {
            setSlidesPerView(3);
        } else if (screenWidth <= 768) {
            setSlidesPerView(4);
        } else {
            setSlidesPerView(5);
        }
    };
    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, []);

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
        <div className="container">
            <div className={styles.kataloq_container}>

                <Swiper
                    watchSlidesProgress={true}
                    className="mySwiper"
                    slidesPerView={slidesPerView}
                >
                    {carouselData.map(({ img, title, category }) => (
                        <SwiperSlide key={category}
                            className={` ${selectedCategory === category ? "selected" : ""}`}
                            onClick={() => handleItemClick(category)}>
                            <div className={`${styles.kataloq_carousel_item_img}`}>
                                <img src={img} alt={title} />
                            </div>
                            <h3>{title}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>


                <div className={styles.kataloq_products_container}>
                    {
                        filteredProducts.map((product) => {
                            return <div className={styles.card} key={product.id}>
                                <Link to={`/kataloq/${product.title}`}>
                                    <CardItem
                                        image={product.image}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                    /></Link>
                                <PurpleButton title="Səbətə əlavə et" onClick={() => onAddToCart(product)} />
                            </div>
                        })
                    }
                </div>


            </div>
        </div >
    );
};

export default KataloqCategory;

import cake4 from "../../assets/images/brovni.png";
import cake3 from "../../assets/images/cupcake.png";
import cake1 from "../../assets/images/biskuve.png";
import cake2 from "../../assets/images/caske.png";
import styles from "./carousel.module.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FC, useState } from 'react'


const images = [
    { id: 0, img: cake1, price: 5 },
    { id: 1, img: cake2, price: 6 },
    { id: 2, img: cake3, price: 8 },
    { id: 3, img: cake4, price: 9 },

];
interface CarouselInfo {
    offsetAngle?: number,
    carouselRadius?: number,
    peripheralImageRadius?: number,
    transitionTime?: number,
}

export const BannerCarousel: FC<CarouselInfo> = ({
    offsetAngle = 0,
    carouselRadius = 210,
    peripheralImageRadius = 120,
    transitionTime = 2,
}: CarouselInfo) => {

    const [carousel, setCarousel] = useState({
        carouselOrietation: 0,
        elementOrientation: 0,
        focusElement: 0
    })




    const noOfImages: number = images.length
    const theta: number = 360 / noOfImages



    const rotateRight = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation + theta,
            elementOrientation: carousel.elementOrientation - theta,
            focusElement: (carousel.focusElement < (noOfImages - 1)) ? carousel.focusElement + 1 : 0
        })
    }

    const rotateLeft = () => {
        setCarousel({
            carouselOrietation: carousel.carouselOrietation - theta,
            elementOrientation: carousel.elementOrientation + theta,
            focusElement: (carousel.focusElement > 0) ? carousel.focusElement - 1 : noOfImages - 1
        })
    }

    const newCoordinates: number[][] = []
    images.forEach((_, index) => {
        newCoordinates.push([carouselRadius - peripheralImageRadius + carouselRadius * Math.cos(2 * Math.PI * index / noOfImages), carouselRadius - peripheralImageRadius + carouselRadius * Math.sin(2 * Math.PI * index / noOfImages)])
    })


    const totalDeviation: number = offsetAngle * Math.PI / 180 + Math.PI / 2

    const rotatedCoordinates: number[][] = []
    const centerCoordinate: number = carouselRadius - peripheralImageRadius
    newCoordinates.forEach((item) => {
        rotatedCoordinates.push([centerCoordinate + (item[0] - centerCoordinate) * Math.cos(totalDeviation) - (item[1] - centerCoordinate) * Math.sin(totalDeviation), centerCoordinate + (item[0] - centerCoordinate) * Math.sin(totalDeviation) + (item[1] - centerCoordinate) * Math.cos(totalDeviation)])
    })

    return (
        <div className={styles.fancy_carousel_wrapper_element}>

            <div
                className={styles.fancy_carousel}
                style={{
                    transform: `rotate(${carousel.carouselOrietation}deg)`,
                    height: `${carouselRadius * 2}px`, width: `${carouselRadius * 2}px`
                }}
            >
                {
                    images.map(({ id, img, price }) => (
                        (id !== carousel.focusElement) ?
                            <div
                                className={styles.fancy_carousel_element}
                                key={id}
                                style={{
                                    transform: `rotate(${carousel.elementOrientation}deg)`, width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px`,
                                    left: `${rotatedCoordinates[id][0]}px`,
                                    bottom: `${rotatedCoordinates[id][1]}px`,

                                    transition: `${transitionTime}`
                                }}
                            >
                                <img className={styles.fancy_carousel_image} src={img}
                                    style={{ width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px` }} />
                                <div className={styles.cake_price}>{price} AZN</div>

                            </div> :
                            <div
                                className={styles.fancy_carousel_element}
                                key={id}
                                style={{
                                    ...{
                                        transform: `rotate(${carousel.elementOrientation}deg)`, width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px`,
                                        left: `${rotatedCoordinates[id][0]}px`,
                                        bottom: `${rotatedCoordinates[id][1]}px`,

                                        transition: `${transitionTime}`
                                    }
                                }}
                            >
                                <img className={styles.fancy_carousel_image} src={img}
                                    style={{ width: `${peripheralImageRadius * 2}px`, height: `${peripheralImageRadius * 2}px`, transition: `${transitionTime}` }} />
                                <div className={styles.cake_price}>{price} AZN</div>

                            </div>
                    ))
                }


            </div >


            <div className={styles.fancy_carousel_navigators}>
                <button className={styles.fancy_carousel_navigation_button} onClick={rotateLeft}>
                    <FaArrowLeft />
                </button>
                <button className={styles.fancy_carousel_navigation_button} onClick={rotateRight}   >
                    <FaArrowRight />
                </button>
            </div>
        </div >
    )
}

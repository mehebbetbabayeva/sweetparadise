import { Link } from "react-router-dom"
import PurpleButton from "../PurpleButton"
import styles from "./style.module.css"
import { BannerCarousel } from "../BannerCarousel"
import Bannerimg from "../../assets/images/Ellipse 2.png"

const WelcomeBanner = () => {
    return (
        <div className={styles.banner_page}>
            <div className="container">
                <div className={styles.banner_container}>
                    <div className={styles.banner_text}>
                        <h2 className={styles.logo}>Sweet Paradise</h2>
                        <h1 className={styles.welcome_text}>Biz həyatınızı daha da şirin edəcəyik!</h1>
                        <div className={styles.welcome_button}><Link to="/kataloq">  <PurpleButton title="Desertləri gör" /></Link></div>
                    </div>
                    <div className={styles.banner_carousel}>
                        <BannerCarousel />
                    </div>
                    <div className={styles.banner_img}>
                        <img src={Bannerimg} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner
import { Link } from "react-router-dom"
import PurpleButton from "../PurpleButton"
import styles from "./style.module.css"
import { BannerCarousel } from "../BannerCarousel"
import Bannerimg from "../../assets/images/Ellipse 2.png"

const WelcomeBanner = () => {
    return (
<<<<<<< HEAD

        <div className="container">
            <div className={styles.banner_container}>
                <div className={styles.banner_text}>
                    <h2 className={styles.logo}>Sweet Paradise</h2>
                    <h1 className={styles.welcome_text}>Biz həyatınızı daha da şirin edəcəyik!</h1>
                    <div className={styles.welcome_button}><Link to="">  <PurpleButton title="Desertləri gör" /></Link></div>
                </div>

                <div className={styles.banner_carousel}>
                    <BannerCarousel />
                </div>
                <div className={styles.banner_img}>
                    <img src={Bannerimg} alt="banner" />
=======
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
>>>>>>> 9ad28c45fe5805a483a94b36185eff64649c9eba
                </div>
            </div>
        </div>

    )
}

export default WelcomeBanner
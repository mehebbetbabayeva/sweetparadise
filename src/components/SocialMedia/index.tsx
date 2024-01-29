import styles from "./style.module.css";
import Ekler from "../../assets/images/yeklery-3 1.png";
import Sufle from "../../assets/images/sufle.png";
import Donats from "../../assets/images/donats.png";
import Donats2 from "../../assets/images/donuts-colorfull.png";
import Makaron from "../../assets/images/makaron.png";
import LastCookie from "../../assets/images/lastcookie.png";
import PurpleButton from "../PurpleButton";
import { Link } from "react-router-dom";

const Allcookies = [Ekler, Donats, Sufle, Donats2, Makaron, LastCookie];

const index = () => {
  return (
    <div className="container">
      <div className={styles.social_media_container}>
        <div className={styles.insta}>
          <h2 className={styles.followUs}>Instagramda Bizi İzləyin</h2>
        </div>
        <div className={styles.candyPhotos}>
          {Allcookies.map((imgCookies) => {
            return (
              <div className={styles.ImagesContainer}>
                <img src={imgCookies} alt="cookies" />
              </div>
            );
          })}
        </div>

        <div className={styles.boxPurpleButton}>
          <div className={styles.purplebtn}>
            <Link to="https://www.instagram.com/swee_tparadise?igsh=cGo2eWdzemVvcnhu"><PurpleButton title="Abunə ol" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

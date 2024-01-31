import styles from "./style.module.css";
import Eklerr from "../../assets/images/Ekler.jpeg";
import Sufle from "../../assets/images/poncik1.jpeg";
import Donats from "../../assets/images/suflee.jpeg";
import Donats2 from "../../assets/images/Donatsss.jpeg";
import Makaron from "../../assets/images/Makaronnn.png";
import LastCookie from "../../assets/images/cherry.jpeg";
import PurpleButton from "../PurpleButton";
import { Link } from "react-router-dom";

const Allcookies = [Eklerr, Sufle, Donats, Donats2, Makaron, LastCookie];

const index = () => {
  return (
    <div className="container">
      
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
  );
};

export default index;

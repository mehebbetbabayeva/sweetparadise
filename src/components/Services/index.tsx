import styles from "./style.module.css";
import BottleIcon from "../../assets/images/icons8-бутылка-молока-100 1.png";
import Avadanliq from "../../assets/images/icons-avadanliq.png";
import Book from "../../assets/images/icon.book.png";
import CookerCircle from "../../assets/images/CookerCircle.png"
import MoneyIcon from "../../assets/images/moneyIcon.png";
import {ServicesItemLeft} from "../ServicesItem/index";
import {ServicesItemRight} from "../ServicesItem/index";
import IconMan from "../../assets/images/icons-man.png"
import Percent from "../../assets/images/icons-percent.png"
const Services = () => {
  return (
    <div className="container">
      <div className={styles.services_container}>
        <div className={styles.mainText}>
          <h3 className={styles.mainTitle}>Niyə Bizim Şirniyyatlar?</h3>
        </div>

        <div className={styles.services_items_container}>
         
          <div className={styles.services_details_group}>
            <div className={styles.services_details}>
              <ServicesItemLeft img={BottleIcon} text={"Keyfiyyətli məhsullar"} />
              <ServicesItemRight img={Avadanliq} text={"Bahalı Avadanlıqlar"} />
            </div>
            <div className={styles.services_details}>
              <ServicesItemLeft img={Book} text={"Unikal reseptlər"} />
              <ServicesItemRight img={MoneyIcon} text={"Bahalı Avadanlıqlar"} />
            </div>
            <div className={styles.services_details}>
              <ServicesItemLeft img={IconMan} text={"Ən yaxşı şirniyyatçılar"} />
              <ServicesItemRight img={Percent} text={"Sadiqlik proqramı"} />
            </div>
          </div>
          <div className={styles.services_img}>
            <img src={CookerCircle} alt="cooker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

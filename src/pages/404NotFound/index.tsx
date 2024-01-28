import styles from "../404NotFound/style.module.css"
import imagNotfound from "../../assets/images/photo_5309843003071913746_y.jpg"
import PurpleButton from "../../components/PurpleButton"
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.not_found_container} >
                    <div className={styles.not_404} > 4 <div> <img className={styles.pink} src={imagNotfound} alt="" /></div> 4 </div>
                    <div>
                        <h1 className={styles.notFound} > Not Found </h1>
                    </div>
                    <div className={styles.goHome}>
                        <div className={styles.gohome_child}>
                            <Link to={"/"}> <PurpleButton title="Əsas səhifə" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
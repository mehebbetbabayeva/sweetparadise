import { Link, NavLink } from "react-router-dom"
import styles from "./style.module.css"
import { FaShoppingBasket } from "react-icons/fa";
import PurpleButton from "../PurpleButton";
const navData = [
    {
        to: "/",
        title: "Ana səhifə",
    },
    {
        to: "/haqqımızda",
        title: "Haqqımızda",
    },
    {
        to: "/kataloq",
        title: "Kataloq",
    },
    {
        to: "/sifariş-et",
        title: "Sifariş et",
    },
    {
        to: "/əlaqə",
        title: "Əlaqə",
    }
]

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_container}>

                    <Link to={"/"}><h1 className={styles.logo}>Sweet Paradise</h1></Link>
                    <ul className={styles.nav}>
                        {
                            navData.map(({ to, title }) => {
                                return <li  key={title}><NavLink to={to} className={({isActive})=>{return isActive ? styles.active : styles.navli}} >{title}</NavLink></li>
                            })
                        }
                    </ul>
                    <div className={styles.icon_group}>
                        <div className={styles.basket_icon}><FaShoppingBasket />
                        <span className={styles.basket_count}>0</span>
                        </div>
                        <PurpleButton title="Giriş"/>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Header
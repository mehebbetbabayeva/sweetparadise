import { Link, NavLink } from "react-router-dom"
import styles from "./style.module.css"
import { FaShoppingBasket } from "react-icons/fa";
import PurpleButton from "../PurpleButton";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

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
    const cartItems = useSelector((state: RootState) => state.cartReducer.cart);
    const getQuantity = () => {
        let quantity = 0;
        cartItems.forEach((item) => (quantity += item.quantity));
        return quantity;
    };

    const cartCount = getQuantity();


    const [mobile, setMobile] = useState(false)

    const openMenu = () => {
        setMobile(true)

    }
    const closeMenu = () => {
        setMobile(false);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_container}>

                    <Link to={"/"}><h1 className={styles.logo}>Sweet Paradise</h1></Link>
                    <ul className={styles.nav}>
                        {
                            navData.map(({ to, title }) => {
                                return <li key={title}><NavLink to={to} className={({ isActive }) => { return isActive ? styles.active : styles.navli }} >{title}</NavLink></li>
                            })
                        }
                    </ul>
                    <div className={styles.icon_group}>

                        <Link to={"/qeydiyyat"} ><PurpleButton title="Qeydiyyat" /></Link>

                        <Link to={"/səbət"}> <div className={styles.basket_icon}><FaShoppingBasket />
                            <span className={styles.basket_count}>{cartCount > 0 && (
                                <span className="ml-2 py-[2px] px-[8px] text-orange-500 text-sm font-bold rounded-full bg-white">
                                    {cartCount}
                                </span>
                            )}</span>
                        </div>
                        </Link>


                        <div className={styles.menu_icon} onClick={openMenu}><FaBars /></div>

                    </div>
                    {/* mobile menu */}
                    {mobile && <ul className={styles.mobilenav}>
                        {
                            navData.map(({ to, title }) => {
                                return <li key={title} className={styles.headerli}><Link to={to} className={styles.navli} >{title}</Link></li>
                            })
                        }
                        <div className={styles.cancel_icon} onClick={closeMenu}> <ImCancelCircle /></div>
                    </ul>}


                </div>
            </div>
        </header>
    )
}

export default Header;

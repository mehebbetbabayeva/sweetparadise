import styles from "../Register/style.module.css"


import { IoPersonCircleOutline } from "react-icons/io5";
import { LuPhoneForwarded } from "react-icons/lu";
import PurpleButton from "../PurpleButton/index";
import { Link } from "react-router-dom";
import macaronimg from"../../assets/images/1 (1) 1.png"
const Login = () => {
    return (
        <div className="container">
            <div className={styles.center_box}>
                <div className={styles.box_container} >

                    <form className={styles.form_register}>
                        <h1 className={styles.head} >Giriş</h1>
                        <div className= {styles.icon_input}>
                           <span> <IoPersonCircleOutline /> </span>
                            <input type="text" placeholder=" Ad və soyadınız" />
                        </div>
                        <div className= {styles.icon_input} >
                           <span> <LuPhoneForwarded /> </span>
                            <input type="number" placeholder=" Əlaqə nömrəniz" />
                        </div>
                        <PurpleButton title="Giriş et"/>
                        <p>Əgər hesabınız yoxdursa<Link className= {styles.login_link}  to={"/qeydiyyat"}> Qeydiyyat ol </Link></p>
                    </form>
                    <div className={styles.macaron_Login}> <img src={ macaronimg } alt="macaron sweet" /></div>
                   
                </div>
            </div>
        </div>


    )
}

export default Login
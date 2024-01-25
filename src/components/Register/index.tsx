
import styles from "../Register/style.module.css"
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuPhoneForwarded } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import PurpleButton from "../PurpleButton/index";
import { Link } from "react-router-dom";
import macaronimg from"../../assets/images/1 (1) 1.png"
const Register = () => {
    return (
        <div className="container">
            <div className={styles.center_box}>
                <div className={styles.box_container} >
              

                    <form className={styles.form_register}>
                        <h1 className={styles.head} >Qeydiyyat</h1>
                        <div className= {styles.icon_input}>
                           <span> <IoPersonCircleOutline /> </span>
                            <input type="text" placeholder=" Ad və soyadınız" />
                        </div>
                        <div className= {styles.icon_input} >
                           <span> <LuPhoneForwarded /> </span>
                            <input type="number" placeholder=" Əlaqə nömrəniz" />
                        </div>
                        <div className= {styles.icon_input}>
                            <span><RiLockPasswordLine/></span>
                            <input type="password" placeholder=" Şifrəniz"  />
                        </div>
                        <div className= {styles.icon_input}>
                        <span><RiLockPasswordLine/></span>
                            <input  type="password" placeholder=" Şifrənizin təkrarı "  />
                        </div>
                        <PurpleButton title="Qeydiyyat ol"/>
                        <p>Əgər hesabınız varsa <Link className= {styles.login_link}  to={"/giriş"}> Giriş et </Link></p>
                    </form>
                    <div className={styles.macaron}> <img src={ macaronimg } alt="" /></div>
                </div>
            </div>
        </div>


    )
}

export default Register
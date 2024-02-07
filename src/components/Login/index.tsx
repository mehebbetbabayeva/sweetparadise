import styles from "../Register/style.module.css";
import { Link, useNavigate } from "react-router-dom";
import macaronimg from "../../assets/images/1 (1) 1.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { ChangeEvent, FormEvent, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [disable, setDisable] = useState(true);
    const [showEye, setShowEye] = useState(false)
    const [type, setType] = useState("password")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setDisable(!formData.email || !formData.password);
    };

    const showPassword = () => {
        setShowEye(!showEye)
        setType(showEye ? "password" : "text")
    }


    const onLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            navigate("/");
            console.log(user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }
        setFormData({ email: "", password: "" })
    };

    return (
        <div className="container">
            <div className={styles.center_box}>
                <div className={styles.box_container}>
                    <form className={styles.form_register}>
                        <h1 className={styles.head}>Giriş</h1>
                        <div className={styles.icon_input}>
                            <span> <MdOutlineMail /> </span>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Emailiniz"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.icon_input}>
                            <span> <RiLockPasswordLine /></span>
                            <input
                                name="password"
                                type={type}
                                required
                                placeholder="Şifrəniz"
                                onChange={handleInputChange}
                            />
                            <span onClick={showPassword}>
                                {showEye ? <FaRegEye /> : <FaRegEyeSlash />}
                            </span>

                        </div>
                        <button
                            className={styles.purplebtn}
                            onClick={onLogin}
                            disabled={disable}
                        >
                            Giriş
                        </button>
                        <p>Əgər hesabınız yoxdursa<Link className={styles.login_link} to={"/qeydiyyat"}> Qeydiyyat ol </Link></p>
                    </form>
                    <div className={styles.macaron_Login}> <img src={macaronimg} alt="macaron sweet" /></div>
                </div>
            </div>
        </div>
    );
}

export default Login;

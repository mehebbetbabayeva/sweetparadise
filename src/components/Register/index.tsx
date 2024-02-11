import styles from "../Register/style.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import macaronimg from "../../assets/images/1 (1) 1.png";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { ChangeEvent, FormEvent, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
    const [passwordError, setPasswordError] = useState(false);
    const [disable, setDisable] = useState(true);
    const [showEyePassword, setShowEyePassword] = useState(false)
    const [showEyeConfirmPassword, setShowEyeConfirmPassword] = useState(false)
    const [passwordType, setPasswordType] = useState("password")
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        const { email, password, fullName, confirmPassword } = formData;
        const isPasswordValid = password.length > 6;
        setDisable(!email || !isPasswordValid || !fullName || !confirmPassword);
    };

    const showPassword = () => {
        setShowEyePassword(!showEyePassword)
        setPasswordType(showEyePassword ? "password" : "text")
    }

    const showPasswordConfirm = () => {
        setShowEyeConfirmPassword(!showEyeConfirmPassword)
        setConfirmPasswordType(showEyeConfirmPassword ? "password" : "text")
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordError(true);
            return;
        }


        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        console.log(user);
        navigate("/giriş");
        localStorage.setItem('userFullName', formData.fullName);


        setFormData({ fullName: "", email: "", password: "", confirmPassword: "" })
        setPasswordError(false);
    };

    return (
        <div className="container">
            <div className={styles.center_box}>
                <div className={styles.box_container} >
                    <form className={styles.form_register} onSubmit={onSubmit}>
                        <h1 className={styles.head}>Qeydiyyat</h1>
                        <div className={styles.icon_input} >
                            <span><IoPersonCircleOutline /></span>
                            <input
                                type="text"
                                value={formData.fullName}
                                name="fullName"
                                onChange={handleInputChange}
                                required
                                placeholder="Ad və soyadınız"
                            />
                        </div>
                        <div className={styles.icon_input} >
                            <span><MdOutlineMail /></span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Emailinizi daxil edin"
                            />
                        </div>
                        <div className={styles.icon_input}>
                            <span><RiLockPasswordLine /></span>
                            <input
                                type={passwordType}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                placeholder="Şifrəniz"
                            />
                            <span onClick={showPassword}>
                                {showEyePassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </span>
                        </div>
                        <div className={`${styles.icon_input} ${passwordError ? styles.errorBorder : ''}`}>
                            <span><RiLockPasswordLine /></span>
                            <input
                                type={confirmPasswordType}
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                name="confirmPassword"
                                required
                                placeholder="Şifrənizin təkrarı"

                            />
                            <span onClick={showPasswordConfirm}>
                                {showEyeConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </span>
                        </div>
                        {passwordError && <div className={styles.errorText}>Şifrələr eyni deyil</div>}
                        <button
                            type="submit"
                            className={styles.purplebtn}
                            disabled={disable}
                        >
                            Qeydiyyat
                        </button>
                        <p>Əgər hesabınız varsa <Link className={styles.login_link} to={"/giriş"}> Giriş et </Link></p>
                    </form>
                    <div className={styles.macaron}> <img src={macaronimg} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Register;

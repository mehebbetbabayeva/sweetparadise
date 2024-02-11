
import styles from "../ServicesSteps/style.module.css"

const stepData = [
    {
        number: "01",
        step: "Sifarişi alırıq",
        text: "Sifarişinizi alırıq və sizinlə əlaqə saxlayaraq dəqiqləşdiririk"
    },
    {
        number: "02",
        step: "Sifarişi hazırlayırıq",
        text: "Sifarişi müştərinin istəyinə uyğun olaraq hazırlayırıq"
    },
    {
        number: "03",
        step: "Məhsulları göndəririk",
        text: "Sifarişinizi əvvəllər təsdiqlədiyiniz kimi göndəririk."

    },
    {
        number: "04",
        step: "Çatdırılma və ödəniş",
        text: "Kuryerimiz məhsulları birbaşa ünvanınıza çatdıracaq"
    }
]
const ServicesSteps = () => {
    return (
        <div className={styles.servicesContainer}>
            <div className="container">
                <div className={styles.howwork}> <h2>Necə işləyirik?</h2></div>
                <div className={styles.card}>
                    {stepData.map(({ number, step, text }) => {
                        return <div className={styles.cardItem} key={number} >
                            <div className={styles.counter}>{number}</div>
                            <div className={styles.text1} > <p  >{step}</p> </div>
                            <div className={styles.text2}> <span>{text} </span> </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ServicesSteps
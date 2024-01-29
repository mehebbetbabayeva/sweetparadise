import VideoButton from "../../assets/images/Иконка видео.svg"
import styles from "./style.module.css"

const index = () => {
  return (
    <div className={styles.buttonDiv}>
        <img src={VideoButton} alt="arrowicon" />
    </div>
  )
}

export default index
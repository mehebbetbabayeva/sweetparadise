
import styles from "./style.module.css"

interface Iprops{
    img:string,
    text:string
}
export const ServicesItemLeft = ({img,text}:Iprops) => {
  return (
    <div className={styles.services_items_info_left}>
      
        <div className={styles.img}><img src={img} alt="" /></div>
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export const ServicesItemRight = ({img,text}:Iprops) => {
  return (
    <div className={styles.services_items_info_right}>
        <p className={styles.text}>{text}</p>
        <div className={styles.img}><img src={img} alt="" /></div>
      
    </div>
  )
}


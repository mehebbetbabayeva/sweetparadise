import React from 'react'
import styles from "./button.module.css"

interface IButtonProps{
    title:string
}
const PurpleButton = ({title}:IButtonProps) => {
  return (
    <div className={styles.purplebtn}>{title}</div>
  )
}

export default PurpleButton
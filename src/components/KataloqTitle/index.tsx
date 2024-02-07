import React from 'react'
import styles from "./style.module.css"
const KataloqTitle = ({title}) => {
  return (
    <h2 className={styles.kataloq_title}>{title}</h2>
  )
}

export default KataloqTitle
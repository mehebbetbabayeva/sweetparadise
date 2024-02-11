
import styles from "./style.module.css"

interface KataloqTitleProps {
  title: string;
}
const KataloqTitle: React.FC<KataloqTitleProps> = ({ title }) => {
  return (
    <h2 className={styles.kataloq_title}>{title}</h2>
  )
}

export default KataloqTitle
import styles from "./button.module.css"



interface IButtonProps {
  title: string,
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}
const PurpleButton = ({ title, onClick }: IButtonProps) => {




  return (
    <div className={styles.purplebtn} onClick={onClick}>{title}</div>
  )
}

export default PurpleButton
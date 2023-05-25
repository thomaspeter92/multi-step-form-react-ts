import React from 'react'
import styles from './AddOnCard.module.scss'


type CardProps = {
  title: string,
  desc: string,
  price: number,
  id: string,
  onClick: (e:any) => void
 }

const AddOnCard: React.FC<CardProps> = ({id, title, desc, price, onClick}) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  const handleCheck = () => { 
    setChecked(!checked)
  }
  return (
    <label htmlFor={"checkbox"+title} onClick={(e) => onClick(e)} className={`${styles.card} ${checked ? styles.checked : ''}`}>
      <input id={"checkbox"+title} value={id} type="checkbox" className={styles.checkbox} onChange={handleCheck}/>
      <div className={styles.info}>
        <p className={styles.title}>
        {title}
        </p>
        <p className={styles.desc}>
        {desc}
        </p>
      </div>
      <p className={styles.price}>+${price}/mo</p>
    </label>
  )
}

export default AddOnCard
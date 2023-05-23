import React from 'react'
import styles from './AddOnCard.module.scss'


type CardProps = {
  name: string,
  value: string,
  title: string,
  desc: string,
  price: number
 }

const AddOnCard: React.FC<CardProps> = ({name, value, title, desc, price}) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  const handleCheck = () => { 
    setChecked(!checked)
  }

  return (
    <label className={`${styles.card} ${checked ? styles.checked : ''}`}>
      <input type="checkbox" className={styles.checkbox} onChange={handleCheck}/>
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
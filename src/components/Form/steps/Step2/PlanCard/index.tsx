import React from 'react'
import styles from './PlanCard.module.scss'

type CardProps = {
 icon: string,
 name: string,
 price: {monthly: number, yearly: number},
 selected: boolean,
 isYearly: boolean,
 onClick: () => void
}

const PlanCard: React.FC<CardProps> = ({icon, name, price, onClick, selected, isYearly}) => {
  return (
    <div onClick={onClick} className={`${styles.card} ${selected ? styles.selected : ''}`}>
      <div className={styles.imgContainer}>
        <img src={icon} />
      </div>
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.price}>${isYearly ? price.yearly : price.monthly}/{isYearly ? 'yr' : 'mo'}</p>
      <p className={styles.subText}>{isYearly ? '2 months free' : null}</p> 
    </div>
  )
}

export default PlanCard
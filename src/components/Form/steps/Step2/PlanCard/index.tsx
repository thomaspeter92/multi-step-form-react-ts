import React from 'react'
import styles from './PlanCard.module.scss'
import ArcadeIcon from '../../assets/images/icon-arcade.svg'

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
    <div onClick={onClick} className={`${styles.card} ${selected ? styles.selected : null}`}>
      <div className={styles.imgContainer}>
        <img src={icon} />
      </div>
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.price}>${isYearly ? price.yearly : price.monthly}/{isYearly ? 'yr' : 'mo'}</p>
      {isYearly ? <p className={styles.subText}>2 months free</p> : null }
    </div>
  )
}

export default PlanCard
import React from 'react'
import styles from './PlanCard.module.scss'
import ArcadeIcon from '../../assets/images/icon-arcade.svg'

type CardProps = {
 icon: string,
 name: string,
 price: number,
 onClick: React.MouseEventHandler<HTMLButtonElement>
}

const PlanCard: React.FC<CardProps> = ({icon, name, price, onClick}) => {
  
  
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={icon} />
      </div>
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.price}>${price}/yr</p>
      <p className={styles.subText}>2 months free</p>
    </div>
  )
}

export default PlanCard
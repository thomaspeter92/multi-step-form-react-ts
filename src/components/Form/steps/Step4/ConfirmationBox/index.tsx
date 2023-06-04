import React from 'react'
import styles from './ConfirmationBox.module.scss'
import products from "../../../../../data/products"

type Props = {
  data: {
    period: 'yearly' | 'monthly',
    plan: string,
    addons: string[]
  }
}


const ConfirmationBox: React.FC<Props> = ({data}) => {

  const plan = products.plans.find(plan => plan.name === data.plan)
  const addOns = products.addOns.filter(addOn => data.addons.includes(addOn.id));
  let totalPrice = 0;

  if(plan) {
    totalPrice = plan.price[data.period] + addOns.reduce((acc, addOn) => acc + addOn.price, 0)
  }

  console.log(plan)
  return (
    <div className={styles.container}>
      <div className={`${styles.innerContainer} ${styles.blueBg}`}>
      <div className={styles.flex}>
        <div> 
          <p className={styles.title}>{data.plan} ({data.period})</p>
          <button type="button" className={styles.change}>Change</button>
        </div>
        <strong className={styles.price}>
          ${plan && plan.price[data.period]}/{data.period === "yearly" ? "yr" : "mo"}
        </strong>
      </div>
      <hr />
        {addOns.map((addOn, i) => (
          <div className={`${styles.flex} ${styles.addOn}`}>
            <p className={styles.text}>
              {addOn.name}
            </p>
            <p className={styles.addOnPrice}>
              +${addOn.price}/{data.period === "yearly" ? "yr" : "mo"}
            </p>
          </div>
        ))}
      </div>  
      <div className={`${styles.innerContainer}` }>
        <div className={styles.flex}>
          <p className={styles.text}>
            Total (per {data.period === "yearly" ? "year" : "month"})
          </p>
          <strong className={styles.totalPrice}>
            +${totalPrice}/{data.period === "yearly" ? "yr" : "mo"}
          </strong>
        </div>
      </div>
    </div>
      
  )
}

export default ConfirmationBox
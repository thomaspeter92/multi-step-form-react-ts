import React from 'react'
import styles from './ConfirmationBox.module.scss'
import products from "../../../../../data/products"

type Props = {
  data: {
    plan: string,
    period: string,
    addons: string[]
  }
}

const ConfirmationBox: React.FC<Props> = ({data}) => {

  const plan = products.plans.find(plan => plan.name === data.plan)
  const addOns = products.addOns.filter(addOn => data.addons.includes(addOn.id));


  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div> 
          <p className={styles.title}>{data.plan} ({data.period})</p>
          <button type="button" className={styles.change}>Change</button>
        </div>
      </div>
      <hr />
        {addOns.map((addOn, i) => (
          <div className={styles.flex}>
            <p className={styles.text}>
              {addOn.name}
            </p>
            <p>
              +${addOn.price}
            </p>

          </div>
        ))}
    
    </div>  
  )
}

export default ConfirmationBox
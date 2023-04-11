import React from 'react';
import styles from '../Steps.module.scss';
import PlanCard from "../../../PlanCard";
import ArcadeIcon from '../../../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../../../assets/images/icon-advanced.svg';
import ProIcon from '../../../../assets/images/icon-pro.svg';


const plans = [
  {
    name: 'arcade',
    price: 9,
    icon: ArcadeIcon
  },
  {
    name: 'advanced',
    price: 12,
    icon: AdvancedIcon,
  },
  {
    name: 'pro',
    price: 15,
    icon: ProIcon,
  }
]

const Step2 = () => {
  return (
    <div>
      <h1 className={styles.title}>Select your plan</h1>
      <p className={styles.subheading}>You have the option of yearly or monthly billing.</p>
      
      <div className={styles.cardContainer}>

        {plans.map((plan, i) => (
          <PlanCard icon={plan.icon} name={plan.name} price={plan.price} />
        ))}
      </div>

      <div>
        {/* Toggle button */}
      </div>

    </div>
  );
};

export default Step2;
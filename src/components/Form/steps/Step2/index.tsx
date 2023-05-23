import React from 'react';
import styles from '../Steps.module.scss';
import PlanCard from "./PlanCard";
import ArcadeIcon from '../../../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../../../assets/images/icon-advanced.svg';
import ProIcon from '../../../../assets/images/icon-pro.svg';
import ToggleButton from "./ToggleButton";
import { FormikProps } from "formik";


const plans = [
  {
    name: 'arcade',
    price: {monthly: 9, yearly: 90},
    icon: ArcadeIcon
  },
  {
    name: 'advanced',
    price: {monthly: 12, yearly: 120},
    icon: AdvancedIcon,
  },
  {
    name: 'pro',
    price: {monthly: 15, yearly: 150},
    icon: ProIcon,
  }
]

type Step2Props = {
  formik: FormikProps<any>
}

const Step2: React.FC<Step2Props> = ({formik}) => {
  
  const handleClick = (value: string) => {
    formik.setFieldValue('plan', value)
  }
  const togglePlanPeriod = () => {
    formik.setFieldValue('period', formik.values.period === 'monthly' ? 'yearly' : 'monthly')
  }

  return (
    <div>
      <h1 className={styles.title}>Select your plan</h1>
      <p className={styles.subheading}>You have the option of yearly or monthly billing.</p>
      <div className={styles.cardContainer}>
        {plans.map((plan, i) => (
          <PlanCard key={plan.name} isYearly={formik.values.period === 'yearly'} selected={formik.values.plan === plan.name} onClick={() => handleClick(plan.name)} icon={plan.icon} name={plan.name} price={plan.price} />
        ))}
      </div>
      <ToggleButton handleToggle={togglePlanPeriod} />
    </div>
  );
}; 

export default Step2;
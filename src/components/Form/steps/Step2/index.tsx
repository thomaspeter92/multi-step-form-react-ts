import React from 'react';
import styles from '../Steps.module.scss';
import PlanCard from "./PlanCard";
import ToggleButton from "./ToggleButton";
import { FormikProps } from "formik";
import products from '../../../../data/products'

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
        {products.plans.map((plan, i) => (
          <PlanCard key={plan.name} isYearly={formik.values.period === 'yearly'} selected={formik.values.plan === plan.name} onClick={() => handleClick(plan.name)} icon={plan.icon} name={plan.name} price={plan.price} />
        ))}
      </div>
      <ToggleButton yearly={formik.values.period === 'yearly'} handleToggle={togglePlanPeriod} />
    </div>
  );
}; 

export default Step2;
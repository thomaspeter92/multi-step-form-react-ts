import { FormikProps } from "formik"
import React from 'react'
import styles from '../Steps.module.scss';
import AddOnCard from "./AddOnCard";

type Step3Props = {
  formik: FormikProps<any>
}

const addOns = [
  {
    name: 'Online service',
    desc: 'Access to multiplayer games',
    price: 1,
  },
  {
    name: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    name: 'Customizable Profile',
    desc: 'Custom theme on your profile',
    price: 2,
  },


]

const Step3: React.FC<Step3Props> = ({formik}) => {
  return (
    <div>
      <h1 className={styles.title}>Pick add-ons</h1>
      <p className={styles.subheading}>Add-ons help enhance your gaming experience.</p>
      <div className={styles.checkboxContainer}>
      {addOns.map((addOn, i) => ( 
        <AddOnCard key={i} name={addOn.name} value={addOn.name} title={addOn.name} desc={addOn.desc} price={addOn.price} />
      ))}
      </div>
     
    </div>
  )
}

export default Step3 
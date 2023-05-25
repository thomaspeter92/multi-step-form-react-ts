import { FormikProps } from "formik"
import React from 'react'
import styles from '../Steps.module.scss';
import AddOnCard from "./AddOnCard";
import products from "../../../../data/products";

type Step3Props = {
  formik: FormikProps<any>
}

const Step3: React.FC<Step3Props> = ({formik}) => {
  
  const handleCheckboxChange = (event: any) => {
    const { value } = event.target;
    const isChecked = event.target.checked;
    if (isChecked) {
      formik.setFieldValue('addons', [...formik.values.addons, value]);
    } else {
      formik.setFieldValue('addons', formik.values.addons.filter((item:any) => item !== value));
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Pick add-ons</h1>
      <p className={styles.subheading}>Add-ons help enhance your gaming experience.</p>
      <div className={styles.checkboxContainer}>
      {products.addOns.map((addOn, i) => ( 
        <AddOnCard onClick={(e) => handleCheckboxChange(e)} key={i} id={addOn.id} title={addOn.name} desc={addOn.desc} price={addOn.price} />
      ))}
      </div>
     
    </div>
  )
}

export default Step3 
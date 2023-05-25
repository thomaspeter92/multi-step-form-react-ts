import { FormikProps } from "formik"
import React from 'react'
import styles from '../Steps.module.scss';
import ConfirmationBox from "./ConfirmationBox";


type Step4Props = {
  formik: FormikProps<any>
}

const Step4: React.FC<Step4Props> = ({formik}) => {

  console.log(formik.values)
  return (
    <div>
      <h1 className={styles.title}>
      Finishing up
      </h1>
      <p className={styles.subheading}>Double-check everything looks OK before confirming.</p>

      <ConfirmationBox data={formik.values}/>        

      </div>
  )
}

export default Step4
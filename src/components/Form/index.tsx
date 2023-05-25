import React, { useState } from 'react';
import styles from './Form.module.scss';
import Sidebar from "../Sidebar";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Button from "../Button";
import {useFormik} from 'formik';

type AddOn = 'Online service' | 'Larger storage' | 'Customizable profile'

type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  addons: AddOn[];
};

const Form: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      plan: '',
      period: 'monthly',
      addons: []
    }, 
    onSubmit: () => {}
  })


  const nextStep = () => {
    if (step === 5) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <form className={styles.mainContent}>
        {step === 1 ?
          <Step1 formik={formik}/>
        : step === 2 ?
          <Step2  formik={formik}/>
        :step === 3 ?
          <Step3  formik={formik}/>
        :step === 4 ?
          <Step4  formik={formik}/>
        :step === 5 ?
          <Step5 />
        :null}
        <div className={`${styles.btnContainer} ${step === 1 ? styles.start : null}`}>
          {step !== 1 ? <Button onClick={prevStep} variant="secondary">Go Back</Button> : null}
          {step !== 5 ? <Button onClick={nextStep} variant="primary">Next Step</Button> : null}
        </div>
      </form>

    </div>
  );
};

export default Form;
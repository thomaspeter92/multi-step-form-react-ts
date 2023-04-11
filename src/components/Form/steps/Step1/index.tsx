import React from 'react'
import Input from "../../../Input"
import FormLabel from "../../../Label"
import styles from '../Steps.module.scss'
import { FormikProps } from "formik"

type Step1Props = {
  formik: FormikProps<any>;
}

const Step1: React.FC<Step1Props> = ({formik}) => {
  return (
    <div>
      <h1 className={styles.title}>Personal info</h1>
      <p className={styles.subheading}>Please provide your name, email address, and phone number.</p>
      
      <FormLabel htmlFor="name-input">Name</FormLabel>
      <Input onChange={formik.handleChange} value={formik.values.name} name={'name'} id="name-input" placeholder="e.g. Stephen King"/>

      <FormLabel htmlFor="email-input">Email Address</FormLabel>
      <Input onChange={formik.handleChange} value={formik.values.email} name={'email'} id="email-input" placeholder="e.g. stephenking@lorem.com"/>

      <FormLabel htmlFor="phone-input">Phone Number</FormLabel>
      <Input onChange={formik.handleChange} value={formik.values.phone} name={'phone'} id="phone-input" placeholder="e.g. +1 23456 7890"/>
    </div>
  )
}

export default Step1
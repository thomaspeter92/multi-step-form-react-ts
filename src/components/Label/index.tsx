import React from 'react'
import styles from './Label.module.scss'

type LabelProps = {
  children: string;
  htmlFor: string;
}

const FormLabel:React.FC<LabelProps> = ({children, htmlFor}) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>{children}</label>
  )
}

export default FormLabel
import React from 'react'
import styles from './Input.module.scss'


type InputProps = {
  value: string;
  name: string;
  placeholder: string;
  onChange: any;
  disabled?: boolean;
  error?: boolean;
  id: string;
}

const Input:React.FC<InputProps> = ({value, onChange, disabled, name, placeholder, error, id}) => {
  return (
    <input className={`${styles.input} ${error ? styles.error : null}`} onChange={onChange} value={value} name={name} placeholder={placeholder} id={id}/>
  )
}

export default Input
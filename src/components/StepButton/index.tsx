import React from 'react'
import styles from './StepButton.module.scss'

type StepButtonProps = {
  step: number;
  title: string
}

const StepButton:React.FC<StepButtonProps> = ({step = 1, title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepCircle}>{step}</div>
      <div>
        <p className={styles.step}>step {step}</p>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </div>
  )
}

export default StepButton
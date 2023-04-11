import React from 'react'
import styles from './Sidebar.module.scss'
import StepButton from "../StepButton"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <StepButton step={1} title="Your Info" />
      <StepButton step={1} title="Your Info" />
      <StepButton step={1} title="Your Info" />
      <StepButton step={1} title="Your Info" />
    </div>
  )
}

export default Sidebar
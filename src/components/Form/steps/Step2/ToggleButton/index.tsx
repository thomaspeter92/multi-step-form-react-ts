import React, { useState } from 'react'
import styles from './ToggleButton.module.scss'
import { motion } from "framer-motion"

type ToggleProps = {
 handleToggle: () => void;  
}

const spring = {
  type: "spring",
  stiffness: 800,
  
}
const switchVariants = {
  on: { x: "25px" }, // Right end
  off: { x: "0px" }, // Left end
};

const ToggleButton: React.FC<ToggleProps> = ({handleToggle}) => {
  const [toggleOn, setToggleOn] = useState(false)
  const toggle = () => {
    setToggleOn(!toggleOn)
    handleToggle()
    }
  return (
    <button type="button" className={styles.container}>
      <p className={`${styles.text} ${!toggleOn ? styles.selected : ''}`}>Monthly</p>
      <div onClick={toggle} className={`${styles.switch}`}>
        <motion.div variants={switchVariants}  animate={toggleOn ? 'on' : 'off'} className={`${styles.switchInner}`} />
      </div>
      <p className={`${styles.text} ${toggleOn ? styles.selected : ''}`}>Yearly</p>
    </button>
  )
}


export default ToggleButton
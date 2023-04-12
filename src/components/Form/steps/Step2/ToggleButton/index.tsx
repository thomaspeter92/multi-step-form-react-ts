import React, { useState } from 'react'
import styles from './ToggleButton.module.scss'
import { motion } from "framer-motion"

type ToggleProps = {
 handleToggle: () => void;  
}

const ToggleButton: React.FC<ToggleProps> = ({handleToggle}) => {
  const [toggleOn, setToggleOn] = useState(false)
  const toggle = () => {
    setToggleOn(!toggleOn)
    handleToggle()
  }

  return (
    <div className={styles.container}>
      <p className={`${styles.text} ${!toggleOn ? styles.selected : null}`}>Monthly</p>
      <div onClick={toggle} className={`${styles.switch} ${toggleOn ? styles.toggleRight : null}`}>
        <motion.div layout className={styles.switchInner} transition={spring}/>
      </div>
      <p className={`${styles.text} ${toggleOn ? styles.selected : null}`}>Yearly</p>
    </div>
  )
}

const spring = {
  type: "spring",
  stiffness: 800,
  damping: 30
}

export default ToggleButton
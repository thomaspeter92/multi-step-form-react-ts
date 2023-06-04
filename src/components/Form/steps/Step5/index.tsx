import React from 'react'
import IconThankyou from '../../../../assets/images/icon-thank-you.svg'
import styles from '../Steps.module.scss'

const Step5 = () => {
  return (
    <div className={styles.step5}>
      <img src={IconThankyou} alt="thank you icon" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have
        fun using our platform. If you ever need support, please feel
        free to email us at support@loremgaming.com
      </p>
    </div>
  )
}

export default Step5
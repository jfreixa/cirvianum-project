import React from 'react'
import styles from './HalfScreenText.css'

const HalfScreenText = ({ children }) => {
  return (
    <div className={styles.HalfScreenText}>
      <div className={styles.Flex}>
        {children}
      </div>
    </div>
  )
}

export default HalfScreenText

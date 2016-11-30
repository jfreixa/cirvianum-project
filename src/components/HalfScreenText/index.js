import React from 'react'
import styles from './HalfScreenText.css'

const HalfScreenText = ({ alignRight, children }) => {
  const classAlign = alignRight ? styles.Right : styles.Left
  return (
    <div className={[styles.HalfScreenText, classAlign].join(' ')}>
      <div className={styles.Flex}>
        {children}
      </div>
    </div>
  )
}

export default HalfScreenText

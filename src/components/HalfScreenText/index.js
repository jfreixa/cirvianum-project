import React from 'react'
import styles from './HalfScreenText.css'



const HalfScreenText = ({ alignRight, children }) => {
  const classAlign = alignRight ? styles.Right : styles.Left
  return (
    <div className={styles.HalfScreenText}>
      <div className={classAlign}>
        {children}
      </div>
    </div>
  )
}

export default HalfScreenText

import React from 'react'
import styles from './Button.css'

const Button = ({ text }) => (
  <button className={styles.Button}>
    {text}
  </button>
)

export default Button

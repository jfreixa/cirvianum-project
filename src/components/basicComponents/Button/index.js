import React from 'react'
import styles from './Button.css'

const Button = ({ text, fullWidth }) => {
  let classes = fullWidth ? [styles.Button, styles.fullWidth].join(' '): styles.Button;
  return (
    <button className={classes}>
      {text}
    </button>
  )
}

export default Button

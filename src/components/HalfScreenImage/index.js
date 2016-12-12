import React from 'react'
import styles from './HalfScreenImage.css'

const HalfScreenImage = ({ image }) => {
  return (
    <div className={styles.HalfScreenImage}>
      <img src={image} className={styles.Image} alt='' />
    </div>
  )
}

export default HalfScreenImage

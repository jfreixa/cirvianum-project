import React from 'react'
import styles from './HalfScreenImage.css'



const HalfScreenImage = ({ image }) => {
  return (
    <div className={styles.HalfScreenImage}>
      <img src={image} alt='' />
    </div>
  )
}

export default HalfScreenImage

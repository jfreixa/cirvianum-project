import React from 'react'
import styles from './HalfScreenGallery.css'
import Gallery from './Gallery'

const HalfScreenGallery = ({ photos }) => {
  return (
    <div className={styles.HalfScreenGallery}>
      <Gallery photos={photos} />
    </div>
  )
}

export default HalfScreenGallery

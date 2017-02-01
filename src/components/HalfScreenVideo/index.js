import React from 'react'
import styles from './HalfScreenVideo.css'

const HalfScreenVideo = ({ video }) => {
  return (
    <div className={styles.HalfScreenVideo}>
      <video autoPlay loop src={video} className={styles.Video} />
    </div>
  )
}

export default HalfScreenVideo

import React from 'react'
import styles from './HalfScreenVideo.css'

const HalfScreenVideo = ({ video }) => {
  return (
  <div className={styles.HalfScreenVideo}>
    <video controls autoPlay loop src={video} className={styles.Video}></video>
  </div>
  )
}

export default HalfScreenVideo

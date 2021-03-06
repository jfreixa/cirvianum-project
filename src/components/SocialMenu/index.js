import React from 'react'
import styles from './SocialMenu.css'
import FontAwesome from 'react-fontawesome'

const Contact = () => {
  return (
    <div className={styles.socialButtons}>
      <div className={styles.socialButtons}>
        <a className={[styles.socialButton, styles.facebook].join(' ')} href="#">
          <FontAwesome name='facebook' className={styles.fa} />
        </a>
        <a className={[styles.socialButton, styles.twitter].join(' ')} href="#">
          <FontAwesome name='twitter' className={styles.fa} />
        </a>
        <a className={[styles.socialButton, styles.google].join(' ')} href="#">
          <FontAwesome name='google' className={styles.fa} />
        </a>
      </div>
    </div>
  )
}

export default Contact
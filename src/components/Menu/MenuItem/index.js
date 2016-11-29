import React from 'react'
import styles from './MenuItem.css'

const MenuItem = ({ name, link }) => {
  return (
    <a href={link} className={styles.MenuItem}>
      {name}
    </a>
  )
}

export default MenuItem

import React from 'react'
import styles from './MenuItem.css'

const MenuItem = ({ name, link }) => {
  return (
    <li>
      <a href={link} className={styles.MenuItem}>
        {name}
      </a>
    </li>
  )
}

export default MenuItem

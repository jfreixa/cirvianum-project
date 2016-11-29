import React from 'react'
import styles from './FlexLayout.css'



const FlexLayout = ({ reverse, children }) => {
  const classReverse = reverse ? styles.reverse : ''
  return (
    <div className={[styles.FlexLayout, classReverse].join(' ')}>
      { children }
    </div>
  )
}

export default FlexLayout

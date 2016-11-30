import React from 'react'
import styles from './FlexLayout.css'

const FlexLayout = ({ reverse, id, children }) => {
  const classReverse = reverse ? styles.reverse : ''
  return (
    <div className={[styles.FlexLayout, classReverse].join(' ')} id={id}>
      { children }
    </div>
  )
}

export default FlexLayout

import React from 'react'
import AppBar from 'material-ui/AppBar'
import { GameCard } from '../../components'
import styles from './GamesPage.css'

const GamesPage = () => (
  <div>
    <AppBar
      title='Title'
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
    <div className={styles.container}>
      <div className={styles.children}>
        <GameCard />
      </div>
      <div className={styles.children}>
        <GameCard />
      </div>
      <div className={styles.children}>
        <GameCard />
      </div>
      <div className={styles.children}>
        <GameCard />
      </div>
      <div className={styles.children}>
        <GameCard />
      </div>
      <div className={styles.children}>
        <GameCard />
      </div>
      <div className={styles.children}>
        <GameCard />
      </div>
    </div>
  </div>
)

export default GamesPage

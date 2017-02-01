import React from 'react'
import AppBar from 'material-ui/AppBar'
import { } from '../../components'
import { Card } from 'material-ui/Card'
import styles from './GamePage.css'

const GamePage = () => (
  <div>
    <AppBar
      title='Title'
      iconClassNameRight='muidocs-icon-navigation-expand-more'
    />
    <div className={styles.container}>
      <Card>
        <div className={styles.game} id='game'></div>
      </Card>
    </div>
  </div>
)

export default GamePage

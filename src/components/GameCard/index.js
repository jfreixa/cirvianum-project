import React from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'

const GameCard = () => {
  return (
    <Card>
      <CardMedia overlay={<CardTitle title='Game 1' />}>
        <img src='http://placehold.it/500x337' alt='' />
      </CardMedia>
    </Card>
  )
}

export default GameCard

import React, { Component } from 'react'
import { Title, P, Button, HalfScreenText, HalfScreenImage } from '../../components'

class Landing extends Component {
  render () {
    return (
      <div>
        <HalfScreenImage image='http://placehold.it/1000x1000' />
        <HalfScreenText>
          <Title text='Desenvolupament Aplicacions Web' />
          <P text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempore, expedita voluptate tempora magni, quos molestias delectus, quaerat, ipsam sit aliquam eaque! Distinctio, dicta, reprehenderit! Rerum repellat tempora dicta atque fuga, commodi id sint tenetur sunt odio laborum. Placeat, alias.' />
          <Button text='+ info' />
        </HalfScreenText>
        <HalfScreenText alignRight>
          <Title text='Prova el joc desenvolupat per els nostres alumnes' />
          <P text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ad illum perspiciatis quaerat labore tempora quas veniam eaque, reiciendis autem, possimus, iure vero amet, quia sed dolorem esse. Sit rerum error cupiditate beatae quod, quibusdam nam maiores omnis laborum. Fugit atque dignissimos veritatis ex expedita possimus sint nostrum libero natus.' />
          <Button text='+ info' />
        </HalfScreenText>
        <HalfScreenImage image='http://placehold.it/1000x1000' />
      </div>
    )
  }
}
export default Landing

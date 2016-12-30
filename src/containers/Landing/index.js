import React, { Component } from 'react'
import sudoku from './sudoku.png'
import developer from './developer-pc.jpeg'
import {
  Title,
  P,
  Button,
  HalfScreenText,
  HalfScreenImage,
  FlexLayout,
  Menu,
  HalfScreenGallery,
  Contact
} from '../../components'

class Landing extends Component {

  generateImage (times) {
    let returnArray = []
    for (let i = 0; i < times; i++) {
      const width = Math.floor(Math.random() * (1920 - 400) + 400)
      const height = Math.floor(Math.random() * (600 - 600) + 600)
      const aspectRatio = width / height
      returnArray.push({
        src: `http://lorempixel.com/${width}/${height}/`,
        width: width,
        height: height,
        aspectRatio: aspectRatio,
        lightboxImage: {
          src: `http://lorempixel.com/${width}/${height}/`,
          srcset: [
            `http://lorempixel.com/${width}/${height}/ 1024w`,
            `http://lorempixel.com/${width}/${height}/ 800w`,
            `http://lorempixel.com/${width}/${height}/ 500w`,
            `http://lorempixel.com/${width}/${height}/ 320w`
          ]
        }
      })
    }
    return returnArray
  }

  render () {
    return (
      <div>
        <Menu />
        <FlexLayout id='presentacio'>
          <HalfScreenImage image={developer} />
          <HalfScreenText>
            <Title text='Desenvolupament Aplicacions Web' />
            <P text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempore, expedita voluptate tempora magni, quos molestias delectus, quaerat, ipsam sit aliquam eaque! Distinctio, dicta, reprehenderit! Rerum repellat tempora dicta atque fuga, commodi id sint tenetur sunt odio laborum. Placeat, alias.' />
            <Button text='+ info' />
          </HalfScreenText>
        </FlexLayout>

        <FlexLayout reverse id='joc'>
          <HalfScreenImage image={sudoku} />
          <HalfScreenText>
            <Title text='Prova el joc desenvolupat per els nostres alumnes' />
            <P text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ad illum perspiciatis quaerat labore tempora quas veniam eaque, reiciendis autem, possimus, iure vero amet, quia sed dolorem esse. Sit rerum error cupiditate beatae quod, quibusdam nam maiores omnis laborum. Fugit atque dignissimos veritatis ex expedita possimus sint nostrum libero natus.' />
            <Button text='+ info' />
          </HalfScreenText>
        </FlexLayout>

        <FlexLayout id='galeria'>
          <HalfScreenGallery photos={this.generateImage(10)} />
          <HalfScreenText>
            <Title text='Visita la nostra galeria' />
            <P text='Tria el que vulguis veure' />
            <Button text='+ info' />
          </HalfScreenText>
        </FlexLayout>

        <FlexLayout reverse id='empreses'>
          <HalfScreenGallery photos={this.generateImage(10)} />
          <HalfScreenText>
            <Title text='Empreses col·laboradores' />
            <P text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ad illum perspiciatis quaerat labore tempora quas veniam eaque, reiciendis autem, possimus, iure vero amet, quia sed dolorem esse. Sit rerum error cupiditate beatae quod, quibusdam nam maiores omnis laborum. Fugit atque dignissimos veritatis ex expedita possimus sint nostrum libero natus.' />
            <Button text='+ info' />
          </HalfScreenText>
        </FlexLayout>
        <Contact />
      </div>
    )
  }
}
export default Landing

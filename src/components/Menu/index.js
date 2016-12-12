import React, { Component } from 'react'
import styles from './Menu.css'
import logo from './logo_cirvianum.svg'
import MenuItem from './MenuItem'

const InfoMenu = [
  {
    name: 'Presentació',
    link: '#presentacio'
  },
  {
    name: 'Joc',
    link: '#joc'
  },
  {
    name: 'Galeria',
    link: '#galeria'
  },
  {
    name: 'Empreses',
    link: '#empreses'
  }
]

class Menu extends Component {
  constructor (...args) {
    super(...args)
    this.state = { menu: false }
    this.handleMenu = this.handleMenu.bind(this)
  }

  handleMenu () {
    this.setState({ menu: !this.state.menu })
  }

  render () {
    return (
      <div className={styles.Menu}>
        <div>
          <img src={logo} className={styles.Logo} alt='' />
        </div>
        <div>
          <span onClick={this.handleMenu}>MENU</span>
          {this.state.menu
            ? InfoMenu.map(({ name, link }, index) => (
              <MenuItem name={name} key={index} link={link} />
            ))
            : ''}
        </div>
      </div>
    )
  }

}

export default Menu

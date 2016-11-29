import React from 'react'
import styles from './Menu.css'
import logo from './logo_cirvianum.svg'
import MenuItem from './MenuItem'

const InfoMenu = [
  {
    name: 'Presentació',
    link: '#'
  },
  {
    name: 'Joc',
    link: '#'
  },
  {
    name: 'Galeria',
    link: '#'
  },
  {
    name: 'Empreses',
    link: '#'
  }
]

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <div>
        <img src={logo} className={styles.Logo} />
      </div>
      <div>
        { InfoMenu.map(({ name, link }) => (
          <MenuItem name={name} link={link} />
        ))}
      </div>
    </div>
  )
}

export default Menu

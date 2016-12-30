import React from 'react'
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

const Menu = () => {
  return (
    <div className={styles.TopBar}>
      <div>
        <img src={logo} className={styles.Logo} alt='' />
      </div>
      <nav className={styles.Menu}>
        <input type="checkbox" id="button" />
        <label htmlFor="button" />
        <ul>
          {InfoMenu.map(({ name, link }, index) => (
              <MenuItem key={index} name={name} link={link} />
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu

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
    <div className={styles.Menu}>
      <div>
        <img src={logo} className={styles.Logo} alt='' />
      </div>
      <div>
        { InfoMenu.map(({ name, link }, index) => (
          <MenuItem name={name} key={index} link={link} />
        ))}
      </div>
    </div>
  )
}

export default Menu

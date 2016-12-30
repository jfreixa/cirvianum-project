import React from 'react'
import styles from './Contact.css'
import { Title, SocialMenu, Button } from '../'
import logo from './logo_cirvianum.svg'

const Contact = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Form}>
                <Title text='Vols contactar amb nosaltres?' />
                <input type='text' />
                <input type='text' />
                <Button text='Enviar' fullWidth />
            </div>
            <div className={styles.SocialMenu}>
                <SocialMenu />            
            </div>
            <div className={styles.background}>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default Contact
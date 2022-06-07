import React from 'react'
import Header from './Header'
import styles from '../styles/ResusHero.module.css'

const ResusHero = ({ setMenuToggle, menuToggle }) => {
    return (
        <div className={styles.resursHero}>
            <div className='container__fluid'>
                <Header setMenuToggle={setMenuToggle}
                    menuToggle={menuToggle} />

                <h4>Resurslar</h4>
            </div>
        </div>
    )
}

export default ResusHero
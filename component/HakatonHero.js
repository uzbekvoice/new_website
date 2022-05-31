import React from 'react'
import styles from '../styles/HakatonHero.module.css'

export default function HakatonHero() {
    return (
        <div className={styles.hakatonHero}>
            <img className={styles.hakatonHeroBg} src='/hakaton-hero-bg.png' alt='hero'/>
            <h3 className={styles.hakatonHero_Left}>
                Hakaton
            </h3>
            <div className={styles.hakatonHero_Right}>
                <div>
                    <h4>350</h4>
                    <p>Qatnashchilar</p>
                </div>
                <div>
                    <h4>6</h4>
                    <p>Jamoa</p>
                </div>
                <div>
                    <h4>6</h4>
                    <p>Loyiha</p>
                </div>
            </div>
        </div>
    )
}

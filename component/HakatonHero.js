import React from 'react'
import HeaderHakaton from '../component/HeaderHakaton'
import styles from '../styles/HakatonHero.module.css'

export default function HakatonHero() {
    return (
        <div className={styles.hakatonHeroWrappper + ' container__fluid'}>
            <HeaderHakaton />
            <div className={styles.hakatonHero}>
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
        </div>
    )
}

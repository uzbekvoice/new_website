import React from 'react'
import HeaderHakaton from '../component/HeaderHakaton'
import styles from '../styles/HakatonHero.module.css'

export default function HakatonHero({
    menuHakatonToggle,
    setHakatonToggle,
    openLang,
    setOpenLang
}) {
    return (
        <div className={styles.hakatonHeroWrappper}>
            <div className='container__fluid'>
                <HeaderHakaton
                    setHakatonToggle={setHakatonToggle}
                    menuHakatonToggle={menuHakatonToggle}
                    openLang={openLang}
                    setOpenLang={setOpenLang}
                />
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
        </div>
    )
}

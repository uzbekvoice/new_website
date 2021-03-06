import React from 'react'
import Header from './Header'
import styles from '../styles/ResusHero.module.css'

const ResusHero = ({
    setMenuToggle,
    menuToggle,
    stepDropDown,
    setStepDropDown,
    hakDropDown,
    sethakDropDown,
    otherDropDown,
    setOtherDropDown
}) => {
    return (
        <div className={styles.resursHero}>
            <div className='container__fluid'>
                <Header
                    setMenuToggle={setMenuToggle}
                    menuToggle={menuToggle}
                    stepDropDown={stepDropDown}
                    setStepDropDown={setStepDropDown}
                    hakDropDown={hakDropDown}
                    sethakDropDown={sethakDropDown}
                    otherDropDown={otherDropDown}
                    setOtherDropDown={setOtherDropDown}
                />

                <h4>Resurslar</h4>
            </div>
        </div>
    )
}

export default ResusHero
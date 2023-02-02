import React from 'react'
import styles from '../styles/ConvertingSpeech.module.css'

const ConvertingSpeech = () => {
    return (
        <div className={styles.ConvertingSpeech}>
            <div className={styles.title}>
                <h3>Og’zaki nutqni
                    matnga aylantirish
                    <span></span>
                </h3>
                <p>O'zingiz yoqtirgan har qanday turdagi
                    audio kontentni yarating</p>
            </div>

            <div className={styles.speech_box}>
                <img src='/mic.png' alt='mic' />
                <p>Mikrofonni ustiga bosing va gapiring</p>
            </div>
        </div>
    )
}

export default ConvertingSpeech
import React from 'react'
import styles from '../styles/ConvertingText.module.css'

const ConvertingText = () => {
    return (
        <div className={styles.ConvertingSpeech}>
            <div className={styles.title}>
                <h3>Matnni og’zaki
                    nutqqa o’girish
                    <span></span>
                </h3>
                <p>O'zingiz yoqtirgan har qanday turdagi
                    audio kontentni yarating</p>
            </div>

            <div className={styles.speech_box}>
                <textarea placeholder='Matnni bu yerga yozing'></textarea>
                <button>Tinglash</button>
            </div>
        </div>
    )
}

export default ConvertingText
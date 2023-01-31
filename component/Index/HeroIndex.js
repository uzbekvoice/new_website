import React from 'react'
import styles from '../../styles/HeroIndex.module.css'

export default function HeroIndex() {
  return (
    <div className={styles.container}>
    <div className={styles.block}>
    

      <div className={styles.content}>
        <h5>Ovoz yig'ish 3 bosqichda amalga oshirildi - Tanishish</h5>
        <h1>UzbekVoice API yordamida ovozni matnga o'giring</h1>
        <p>
         Biz bilan sozlash va ulash oson
        </p>

        <a>Waitlistga qo'shilish</a>
      </div>

      <div className={styles.mic}>
        
        </div>
    </div>
  </div>
  )
}

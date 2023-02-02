import React from 'react'
import styles from '../../styles/HeroIndex.module.css'
import Chevron from '../Question/Chevron'

export default function HeroIndex() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>   
      <div className={styles.hero_blur}></div>
        <div className={styles.content}>
          <div className={styles.voiceCollect}>
            Ovoz yig'ish <span> 3 bosqich</span>da amalga oshirildi - Tanishish
            <Chevron
              className={styles.chevron + " rotate"}
              width={7}
              height={11}
              fill={"#ffffff"}
            />
          </div>
          <h1>UzbekVoice API yordamida ovozni matnga o'giring</h1>
          <p>
            Biz bilan sozlash va ulash oson
          </p>

          <div className={styles.waitlist}>
            <a>Waitlistga qo'shilish</a>
            <div>
              Biz bilan bog’lanish
              <Chevron
                className={styles.chevron + " rotate"}
                width={7}
                height={11}
                fill={"#ffffff"}
              />
            </div>
          </div>
        </div>

        <div className={styles.mic}>
          <img src='/mic.png' alt='mic' />
        </div>
      </div>
    </div>
  )
}

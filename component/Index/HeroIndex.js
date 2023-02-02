import { useRouter } from 'next/router';
import React from 'react'
import styles from '../../styles/HeroIndex.module.css'
import Chevron from '../Question/Chevron'

export default function HeroIndex({ data }) {
  const { locale } = useRouter();
  return (
    data.data.filter((p) => p.languages_code === locale)
      .map((value, i) =>
        <div key={i} className={styles.container}>
          <div className={styles.block}>
            <div className={styles.hero_blur}></div>
            <div className={styles.content}>
              <div className={styles.voiceCollect}>
                {value?.uptitle}
                <Chevron
                  className={styles.chevron + " rotate"}
                  width={7}
                  height={11}
                  fill={"#ffffff"}
                />
              </div>
              <h1>{value?.title}</h1>
              <p>
                {value?.contact_us_button}
              </p>

              <div className={styles.waitlist}>
                <a>{value?.call_action_button}</a>
                <div>
                  {value?.contact_us_button}
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
      ))

}

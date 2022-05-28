import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from "next/image";
export default function Hero() {
  return (
    <div className={styles.header__content}>
    <div className={styles.header__content_text}>
      <h1>O&apos;zbek nutqini kompyuterga o&apos;rgatish tashabbusi</h1>
      <p>
        Ovozli asistentlar moliya, transport, telekom, chakana savdo,
        sog&apos;liqni saqlash, ta&apos;lim va boshqa ko&apos;p sohalarda
        qo&apos;llanadi.
      </p>

      <div className={styles.header__content_block}>
        <a href="http://commonvoice.mozilla.org/uz/">
          Loyihada ishtirok etish
        </a>

        <div className={styles.header__content_info}>
          <Image
            src="/telegramm-blue.png"
            width={23}
            height={18}
            alt="telegramicon"
            quality={75}
          />
          <a href="https://t.me/joinchat/P84ptL81sN8yNWRi">
            Telegram jamoa
          </a>
        </div>
      </div>
    </div>
    <video
      poster="./video-poster.jpg"
      src="./video.mp4"
      controls
      muted
      loop
      // autoPlay
    ></video>
  </div>
  )
}

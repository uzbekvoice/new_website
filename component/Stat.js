import React from 'react'
import styles from '../styles/Stat.module.css'
import Image from 'next/image'
export default function Stat() {
  return (
    <div className={styles.statistic}>
      <div className={styles.content}>
        <h3>Statistika</h3>
        <p>O'z maqsadimizga yetish uchun muvaffaqiyat ko'rsatkichlari</p>
        <div className={styles.status}>
          <span>~270 000 </span>  <p> dan ortiq jumla</p> <span> ~300</span> <p> soatdan ko'p ovoz</p>
        </div>
        <div className={styles.img_top}>
          <Image src='/stat-top.png' width={308} height={17} quality={100} alt="stat" />
        </div>
        <div className={styles.img_bottom}>
          <Image src='/stat-bottom.png' width={1268} height={251} quality={100} alt="stat" />
        </div>
        <div className={styles.img_hour}>
          <Image src='/stat-hour.jpg' width={1052} height={389} quality={100} alt="stat" />
        </div>
      </div>


    </div>
  )
}

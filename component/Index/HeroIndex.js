import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from '../../styles/HeroIndex.module.css'
import Modal from '../Modal';
import Chevron from '../Question/Chevron'

export default function HeroIndex({ data }) {
  const { locale } = useRouter();
  const [modal, setModal] = useState(false);

  const openModal = (e) => {
    setModal(true)
    e.stopPropagation()
  }

  return (
    data.data.filter((p) => p.languages_code === locale)
      .map((value, i) =>
        <div key={i} className={styles.container} onClick={()=>setModal(false)}>
          <div className={styles.block}>
            <div className={styles.hero_blur}></div>
            <div className={styles.content}>
              <Link href={'/malumot'}>
                <a className={styles.voiceCollect}>
                  {value?.uptitle}
                  <Chevron
                    className={styles.chevron + " rotate"}
                    width={7}
                    height={11}
                    fill={"#ffffff"}
                  />
                </a>
              </Link>
              <h1>{value?.title}</h1>
              <p>
                {value?.partnership_title}
              </p>

              <div className={styles.waitlist}>
                <button type='button' onClick={openModal}>{value?.call_action_button}</button>
                <Link href={'/hamkorlar'}>
                  <a>
                    {value?.contact_us_button}
                    <Chevron
                      className={styles.chevron + " rotate"}
                      width={7}
                      height={11}
                      fill={"#ffffff"}
                    />
                  </a>
                </Link>
              </div>

              {
                modal? <Modal setModal={setModal}/> : null
              }
            </div>

            <div className={styles.mic}>
              <img src='/mic.png' alt='mic' />
            </div>
          </div>
        </div>
      ))

}

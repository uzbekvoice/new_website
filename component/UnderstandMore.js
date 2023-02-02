import React from 'react'
import styles from '../styles/UnderstandMore.module.css'
import HomeApi from '../pages/homeapi/static.json'
import { useRouter } from 'next/router';

const UnderstandMore = () => {
    const { locale } = useRouter();
    return (
        <div className={styles.ConvertingSpeech}>
            <div className={styles.title}>
                <h3>Understand more,
                    right out of the box.
                    <span></span>
                </h3>
                <p>Speech recognition
                    understanding features</p>
            </div>

            <div className={styles.speech_box}>
                {
                    HomeApi.understand
                        .filter((p) => p.languages_code === locale)[0]
                        .data.map((value) => {
                            return (
                                <div key={value.id} className={styles.card}>
                                    <h4>{value.title}</h4>

                                    <p>{value.description}</p>

                                    <img src={value.icon} />

                                    <button type='button'>Coming Soon</button>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default UnderstandMore
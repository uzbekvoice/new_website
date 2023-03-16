import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/ConvertingSpeech.module.css'

const ConvertingSpeech = ({ data }) => {
    const { locale, query, pathname } = useRouter();
    return (
        data.data.filter((p) => p.languages_code === locale)
            .map((value =>
                <div key={value.id} className={styles.ConvertingSpeech}>
                    <div className={styles.title}>
                        <h3>{value?.stt_title}
                            <span></span>
                        </h3>
                        <p>{value?.tts_text}</p>
                    </div>

                    <div className={styles.speech_box}>
                        <img src='/mic.png' alt='mic' />
                        <p>{value?.speak_text}</p>
                    </div>
                </div>
            ))
    )
}

export default ConvertingSpeech
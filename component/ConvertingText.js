import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/ConvertingText.module.css'

const ConvertingText = ({ data }) => {
    const { locale } = useRouter();
    return (
        data.data.filter((p) => p.languages_code === locale)
            .map(value =>
                <div key={value.id} className={styles.ConvertingSpeech}>
                    <div className={styles.title}>
                        <h3>{value?.tts_title}
                            <span></span>
                        </h3>
                        <p>{value.tts_text}</p>
                    </div>

                    <div className={styles.speech_box}>
                        <textarea placeholder={value?.tts_hint_text}></textarea>
                        <button type='button'>{value.listen_text}</button>
                    </div>
                </div>
            )
    )
}

export default ConvertingText
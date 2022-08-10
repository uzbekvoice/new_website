import React from 'react'
import { useRouter } from "next/router";
import styles from '../styles/QollanmaMain.module.css'

const QollanmaMain = ({ data }) => {
    console.log(data, 'guide');

    const { locale } = useRouter()

    return (
        <div className={styles.qollanmaMain}>
            <h3>Qo`llanma\Instruksia</h3>
            <div className={styles.gradientOne}></div>
            <div className={styles.gradientTwo}></div>
            <div className={styles.gradientThree}></div>
            <div className={styles.gradientFour}></div>
            <div className={styles.gradientFive}></div>

            <div>
                {
                    data
                        .filter(p => p.languages_code === locale)
                        .map(({ id, guideline_title, guidline_video, gudline_created_date, guideline_content }) => (
                            <div key={id} className={styles.qollanmaCard}>
                                {
                                    <div className={styles.qollanmaCardMobileHeader}>
                                        <video
                                            poster='/video-poster.jpg'
                                            src={`https://admin.uzbekvoice.ai/assets/${guidline_video}`}
                                            controls
                                            muted
                                            loop
                                            // autoPlay
                                        ></video>
                                    </div>
                                }

                                <div className={styles.qollanmaCardBody}>
                                    <span>{gudline_created_date.slice(0, 10)}</span>
                                    <h4>{guideline_title}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: guideline_content.split(" ", 20).join(' ') }}></p>
                                </div>
                                {
                                    <div className={styles.qollanmaCardHeader}>
                                        <video
                                            poster='/video-poster.jpg'
                                            src={`https://admin.uzbekvoice.ai/assets/${guidline_video}`}
                                            controls
                                            muted
                                            loop
                                            // autoPlay
                                        ></video>
                                    </div>
                                }
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default QollanmaMain
import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/GuideByID.module.css'

const GuideByID = ({ data }) => {
    const { locale, query } = useRouter()
    const dataFilter = data.filter(p => p.languages_code === locale && p.guidelines_id === parseInt(query.id))[0]
    console.log(data);
    return (
        <div className={styles.yangilikByIdHero}>
            <div className={styles.heroImg}>
                <video
                    poster='/video-poster.jpg'
                    src={`https://admin.uzbekvoice.ai/assets/${dataFilter.guidline_video}`}
                    controls
                    muted
                    loop
                // autoPlay
                ></video>
            </div>

            <div className={styles.heroBody}>
                <div className={styles.heroTitleWrapper}>
                    <h3>{dataFilter.guideline_title}</h3>
                    <div className={styles.heroTitleRight}>{dataFilter.gudline_created_date.slice(0, 10)}</div>
                </div>

                <div className={styles.heroDescr} dangerouslySetInnerHTML={{ __html: dataFilter.guideline_content }}></div>                
            </div>
        </div>
    )
}

export default GuideByID
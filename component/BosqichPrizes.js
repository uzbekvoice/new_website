import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/BosqichPrizes.module.css'

export default function HakatonTeams({ resGifts, title }) {

    const { locale } = useRouter();

    const dataGifts = resGifts.data.filter(p => p.languages_code === locale);

    return (
        <div className={styles.hakatonTeams}>
            <h3 className={styles.hakatonTeams_title}>{title}</h3>

            <div className={styles.hakatonTeams_wrapper}>
                {
                    dataGifts.map(({ contest_gifts_id, gift_name, gift_image, place }) => (
                        <div key={contest_gifts_id} className={styles.hakatonTeams_card}>
                            <div className={styles.hakatonTeams_cardHeader}>
                                <img src={`https://admin.uzbekvoice.ai/assets/${gift_image}`} alt='img' />
                            </div>
                            <div className={styles.hakatonTeams_cardBody}>
                                <h4>{gift_name}</h4>
                            </div>
                            <div className={styles.hakatonTeams_cardBadge}>
                                <span>{place}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/HakatonTeams.module.css'

export default function HakatonTeams({ data }) {
    const { locale, query } = useRouter();
    console.log(data);

    return (
        <div className={styles.hakatonTeams}>
            <h3 className={styles.hakatonTeams_title}>Jamoalar</h3>

            <div className={styles.hakatonTeams_wrapper}>
                {
                    data
                        .filter(p => p.languages_code === locale && p.hackathon_id === parseInt(query.id))
                        .map(({ hackathon_teams_id, team_image, team_project_content, team_project_link, team_title, team_winner_place }) => (
                            <div key={hackathon_teams_id} className={styles.hakatonTeams_card}>
                                <div className={styles.hakatonTeams_cardHeader}>
                                    <img src={`https://admin.uzbekvoice.ai/assets/${team_image}`} alt='img' />
                                </div>
                                <div className={styles.hakatonTeams_cardBody}>
                                    <h4>{team_title}</h4>
                                    <span dangerouslySetInnerHTML={{ __html: team_project_content.split(" ", 10).join(' ')}}></span>
                                    <a href={`/${team_project_link}`}>
                                        Узнать больше
                                        <img src='/chevron-right.svg' alt='icon arrow' />
                                    </a>
                                </div>

                                <div className={styles.hakatonTeams_cardBadge}>
                                    <span>{team_winner_place}</span>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/HakatonHero.module.css'

export default function HakatonHero({ data }) {
    const { locale, query } = useRouter();

    return (
        data
            .filter(p => p.languages_code === locale && p.hackathons_id === parseInt(query.id))
            .map(({ id, hackathon_projects_count, hackathon_teams_count, hackathon_title, hackathons_content, hackathons_participants_count, hackaton_dates }) =>
                <div className={styles.hakatonHeroWrappper} key={id}>
                    <div className='container__fluid'>
                        <div className={styles.hakatonHero}>
                            <h3 className={styles.hakatonHero_Left}>
                                {hackathon_title}
                            </h3>
                            <div className={styles.hakatonHero_Right}>
                                <div>
                                    <h4>{hackathons_participants_count}</h4>
                                    <p>Qatnashchilar</p>
                                </div>
                                <div>
                                    <h4>{hackathon_teams_count}</h4>
                                    <p>Jamoa</p>
                                </div>
                                <div>
                                    <h4>{hackathon_projects_count}</h4>
                                    <p>Loyiha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
}

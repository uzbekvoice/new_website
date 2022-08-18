import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/HakatonHero.module.css'

export default function HakatonHero({ data }) {
    const { locale, query } = useRouter();

    return (
        data
            .filter(p => p.languages_code === locale && p.hackathons_id === parseInt(query.id))
            .map(({ id, hackathons_id, hackathon_projects_count, hackathon_teams_count, hackathon_title, hackathons_content, hackathons_participants_count, hackaton_dates, status }) =>
                <div
                    className={hackathons_id === 1 ? styles.hakatonHeroWrappper + ' ' + styles.one : styles.hakatonHeroWrappper}
                    key={id}>
                    <div className='container__fluid'>
                        <div
                            className={status === 'active' ? styles.hakatonHero + ' ' + styles.active : styles.hakatonHero}
                        >
                            <h3 className={styles.hakatonHero_Left}>
                                {hackathon_title}
                            </h3>

                            {
                                status !== 'active' &&
                                <div className={styles.hakatonHero_Right}>
                                    <div>
                                        <h4>{hackathons_participants_count}</h4>
                                        {
                                            locale === "uz-UZ" ?
                                                <p>Qatnashchilar</p>
                                                : locale === "ru-RU" ?
                                                    <p>Участники</p>
                                                    : <p>Participants</p>
                                        }
                                    </div>
                                    <div>
                                        <h4>{hackathon_teams_count}</h4>
                                        {
                                            locale === "uz-UZ" ?
                                                <p>Jamoa</p>
                                                : locale === "ru-RU" ?
                                                    <p>Команда</p>
                                                    : <p>Team</p>
                                        }
                                    </div>
                                    <div>
                                        <h4>{hackathon_projects_count}</h4>
                                        {
                                            locale === "uz-UZ" ?
                                                <p>Loyiha</p>
                                                : locale === "ru-RU" ?
                                                    <p>Проект</p>
                                                    : <p>Project</p>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            ))
}

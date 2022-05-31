import React from 'react'
import styles from '../styles/HakatonTeams.module.css'

const data = [
    {
        id: 1,
        image: '/hakatonTeamsImg.png',
        title: 'Team Name',
    },
    {
        id: 2,
        image: '/hakatonTeamsImg.png',
        title: 'Team Name',
    },
    {
        id: 3,
        image: '/hakatonTeamsImg.png',
        title: 'Team Name',
    },
    {
        id: 4,
        image: '/hakatonTeamsImg.png',
        title: 'Team Name',
    },
    {
        id: 5,
        image: '/hakatonTeamsImg.png',
        title: 'Team Name',
    },
    {
        id: 6,
        image: '/hakatonTeamsImg.png',
        title: 'Team Name',
    }
]

export default function HakatonTeams() {
    return (
        <div className={styles.hakatonTeams}>
            <h3 className={styles.hakatonTeams_title}>Jamoalar</h3>

            <div className={styles.hakatonTeams_wrapper}>
                {
                    data.map(({ id, title, image }) => (
                        <div key={id} className={styles.hakatonTeams_card}>
                            <div className={styles.hakatonTeams_cardHeader}>
                                <img src={image} alt='img' />
                            </div>
                            <div className={styles.hakatonTeams_cardBody}>
                                <h4>{title}</h4>
                                <a href='#'>
                                    Узнать больше
                                    <img src='/chevron-right.svg' alt='icon arrow' />
                                </a>
                            </div>

                            {
                                (id === 1 || id === 2 || id === 3) && <div className={styles.hakatonTeams_cardBadge}>
                                    <span>{id} orin</span>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

import React from 'react'
import styles from '../styles/BosqichPrizes.module.css'

const data = [
    {
        id: 1,
        image: '/prizeLaptop.png',
        title: 'Laptop',
        descr: 'Macbook Air',
    },
    {
        id: 2,
        image: '/prizaPhone.png',
        title: 'Mobile Phone',
        descr: 'Samsung Galaxy S20',
    },
    {
        id: 3,
        image: '/prizeLaptop.png',
        title: 'Laptop',
        descr: 'Macbook Pro',
    },
    {
        id: 4,
        image: '/prizaPhone.png',
        title: 'Mobile Phone',
        descr: 'Samsung Galaxy S20 Ultra',
    },
    {
        id: 5,
        image: '/prizeLaptop.png',
        title: 'Laptop',
        descr: 'Macbook Air',
    },
    {
        id: 6,
        image: '/prizaPhone.png',
        title: 'Mobile Phone',
        descr: 'Samsung Galaxy S20',
    }
]

export default function HakatonTeams() {
    return (
        <div className={styles.hakatonTeams}>
            <h3 className={styles.hakatonTeams_title}>Sovg’alar</h3>

            <div className={styles.hakatonTeams_wrapper}>
                {
                    data.map(({ id, title, descr, image }) => (
                        <div key={id} className={styles.hakatonTeams_card}>
                            <div className={styles.hakatonTeams_cardHeader}>
                                <img src={image} alt='img' />
                            </div>
                            <div className={styles.hakatonTeams_cardBody}>
                                <h4>{title}</h4>
                                <p>{descr}</p>
                            </div>
                            <div className={styles.hakatonTeams_cardBadge}>
                                <span>{id} orin</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

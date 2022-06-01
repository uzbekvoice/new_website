import React from 'react'
import styles from '../styles/HakatonJuri.module.css'

const data = [
    {
        id: 1,
        image: '/hakatonJuriImg.png',
        name: 'Courtney Henry'
    },
    {
        id: 2,
        image: '/hakatonJuriImg.png',
        name: 'Leslie Alexander'
    },
    {
        id: 3,
        image: '/hakatonJuriImg.png',
        name: 'Jenny Wilson'
    },
    {
        id: 4,
        image: '/hakatonJuriImg.png',
        name: 'Annette Black'
    }
]

export default function HakatonJuri() {
    return (
        <div className={styles.hakatonJuri}>
            <h3 className={styles.hakatonJuri_title}>Juri</h3>

            <div className={styles.hakatonJuri_wrapper}>
                {
                    data.map(({ id, image, name }) => (
                        <div key={id} className={styles.hakatonJuri_card}>
                            <img src={image} alt={image} />

                            <p>{name}</p>
                            <a href='#'>
                                Связаться
                                <img src='/chevron-right.svg' />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

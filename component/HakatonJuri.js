import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/HakatonJuri.module.css'


export default function HakatonJuri({ data }) {

    const { query, locale } = useRouter()

    return (
        <div className={styles.hakatonJuri}>
            {
                locale === "uz-UZ" ?
                    <h3 className={styles.hakatonJuri_title}>Hakamlar</h3>
                    : locale === "ru-RU" ?
                        <h3 className={styles.hakatonJuri_title}>Жюри</h3>
                        : <h3 className={styles.hakatonJuri_title}>Jury</h3>
            }

            <div className={styles.hakatonJuri_wrapper}>
                {
                    data
                        .filter(p => p.hackathon_id === parseInt(query.id))
                        .map(({ id, jury_image, jury_link, jury_name }) => (
                            <div key={id} className={styles.hakatonJuri_card}>
                                <img src={`https://admin.uzbekvoice.ai/assets/${jury_image}`} alt='img' />

                                <p>{jury_name}</p>
                                <Link href={jury_link}>
                                    <a>
                                        Связаться
                                        <img src='/chevron-right.svg' />
                                    </a>
                                </Link>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

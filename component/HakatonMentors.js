import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/HakatonMentors.module.css'


export default function HakatonMentors({ data }) {

    const { query, locale } = useRouter()

    return (
        <div className={styles.hakatonJuri}>
            {
                locale === "uz-UZ" ?
                    <h3 className={styles.hakatonJuri_title}>Mentorlar</h3>
                    : locale === "ru-RU" ?
                        <h3 className={styles.hakatonJuri_title}>Менторы </h3>
                        : <h3 className={styles.hakatonJuri_title}>Mentors</h3>
            }

            <div className={styles.hakatonJuri_wrapper}>
                {
                    data
                        .filter(p => p.hackathon_id === parseInt(query.id) & p.languages_code === locale)
                        .map(({ id, mentor_image, mentor_link, mentor_name, mentor_job, }) => (
                            <div key={id} className={styles.hakatonJuri_card}>
                                <img src={`https://admin.uzbekvoice.ai/assets/${mentor_image}`} target='_blank' alt='img' />

                                <p>{mentor_name}</p>
                                <h5>{mentor_job}</h5>
                                
                                    <a target="_blank" href={mentor_link}>
                                        {
                                            locale === "uz-UZ" ?
                                                <span>Bog'lanish</span>
                                                : locale === "ru-RU" ?
                                                    <span>Связаться</span>
                                                    : <span>Contact</span>
                                        }
                                        <img src='/chevron-right.svg' />
                                    </a>
                               
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

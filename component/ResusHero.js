import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/ResusHero.module.css'

const ResusHero = () => {

    const { locale } = useRouter()

    return (
        <div className={styles.resursHero}>
            <div className='container__fluid'>
                {
                    locale === "uz-UZ" ?
                        <h4>Resurslar</h4>
                        : locale === "ru-RU" ?
                            <h4>Ресурсы</h4>
                            : <h4>Resources</h4>
                }
            </div>
        </div>
    )
}

export default ResusHero
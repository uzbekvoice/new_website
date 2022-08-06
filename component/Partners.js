import React from 'react'
import styles from '../styles/Partners.module.css'
import PartnersApi from '../pages/partnersapi/static.json'
import { useRouter } from 'next/router';

export default function Partners() {

    const { locale } = useRouter()

    return (
        PartnersApi.partners
            .filter((p) => p.languages_code === locale)
            .map(({
                id, title, guide, label_phone, label_comment, descr, label_name, placeholder_name, placeholder_comment, button
            }) =>
                <div className={styles.partners} key={id}>
                    <div className={styles.partners_left}>
                        <h3 >{title}</h3>
                        <p >{descr}</p>
                    </div>
                    <form className={styles.partners_right}>
                        <label>{label_name}</label>
                        <input
                            type='text'
                            placeholder={placeholder_name}
                        />
                        <label>{label_phone}</label>
                        <input
                            type='number'
                            placeholder='+998'
                        />
                        <label>{label_comment}</label>
                        <textarea
                            rows="4"
                            cols="50"
                            placeholder={placeholder_comment}>
                        </textarea>

                        <button type='button'>{button}</button>
                    </form>
                </div>
            )
    )
}

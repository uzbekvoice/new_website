import React, { useState } from 'react'
import styles from '../styles/Partners.module.css'
import PartnersApi from '../pages/partnersapi/static.json'
import { useRouter } from 'next/router';

export default function Partners() {

    const { locale } = useRouter()
    const [alert, setAlert] = useState('false');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name !== '' && number !== '') {
            setAlert('true');
            setTimeout(() => setAlert('false'), 5000)
        } else {
            setAlert('error')
            setTimeout(() => setAlert('false'), 5000)
        }

        setComment('');
        setName('')
        setNumber('')
    }

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
                    <form
                        className={styles.partners_right}
                        onSubmit={handleSubmit}
                        style={{ display: alert === 'true' ? 'none' : 'flex' }}
                    >
                        <label>{label_name}</label>
                        <input
                            value={name}
                            type='text'
                            placeholder={placeholder_name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>{label_phone}</label>
                        <input
                            value={number}
                            type='number'
                            placeholder='+998'
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <label>{label_comment}</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows="4"
                            cols="50"
                            placeholder={placeholder_comment}>
                        </textarea>

                        <button type='submit'>{button}</button>
                        <div style={{ display: alert === 'error' ? 'block' : 'none' }} className={styles.error}>
                            {
                                locale === "uz-UZ" ?
                                    <span>Iltimos maydonlarni to'ldiring</span>
                                    : locale === "ru-RU" ?
                                        <span>Пожалуйста, заполните поля</span>
                                        : <span>Please fill in the fields</span>
                            }
                        </div>
                    </form>

                    <div className={styles.thanks} style={{ display: alert === 'true' ? 'flex' : 'none' }}>
                        {
                            locale === "uz-UZ" ?
                                <span>Murojatingiz uchun raxmat. Biz siz bilan yaqin orada aloqaga chikamiz.</span>
                                : locale === "ru-RU" ?
                                    <span>Спасибо за ваш запрос. Мы свяжемся с Вами в скором времени.</span>
                                    : <span>Thank you for your message. We will contact you as soon as possible.</span>
                        }
                    </div>
                </div>
            )
    )
}

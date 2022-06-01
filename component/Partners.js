import React from 'react'
import styles from '../styles/Partners.module.css'
export default function Partners() {
    return (
        <div className={styles.partners}>
            <div className={styles.partners_left}>
                <h3 className={styles.partners_title}>Join as partners</h3>
                <p className={styles.partners_descr}>We collect the e-mail addresses of those who communicate with us via e-mail, aggregate information on what pages consumers access or visit, and information volunteered by the consumer (such as survey information and/or site registrations). The information we collect is used to improve the content of our Web pages and the quality of our service, and is not shared with or sold to other organizations for commercial purposes, except to provide products or services you’ve requested, when we have your permission, or under the following circumstances:</p>
            </div>
            <form className={styles.partners_right}>
                <label>Имя</label>
                <input
                    type='text'
                    placeholder='Введите свое имя'
                />
                <label>Телфон номер</label>
                <input
                    type='number'
                    placeholder='+998'
                />
                <label>Комментарий</label>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder='Необязательно*'>
                </textarea>

                <button type='button'>Отправить заявку</button>
            </form>
        </div>
    )
}

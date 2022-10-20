import { useState } from 'react'
import style from '../styles/Bosqich.module.css'
import FormRegister from './OnliOfflineRegisterForm'

const OnlineOfline = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className={style.onlineOfline}>
                <h2
                    style={{
                        textAlign: "center"
                    }}
                >Oromgohda online yoki offlayn ishtirok eting</h2>
                <div className={style.tableOnline}>
                    <div className={style.table}>
                        <ul>
                            <h2>Online</h2>
                            <li>Telegram bot dan ro'yxatdan o'ting.</li>
                            <li>Va qancha ko'p ovoz yozsangiz va tinglasangiz <br /> g'olib bo'lish imkoniyati oshib boradi.</li>
                        </ul>
                        <ul>
                            <h2>Offlayn</h2>
                            <li>Bot va saytdan  ro'yxatdan o'ting </li>
                            <li>Saralashdan o'ting</li>
                            <li>Oromgohda dam oling va Uzbekvoice ga hissa qo'shing</li>
                        </ul>
                    </div>

                    <button style={{
                        marginBottom: "30px"
                    }} onClick={() => setShow(!show)}>
                        Ro'yxatdan o'ting
                    </button>
                    {
                        show ?
                            <FormRegister /> : null
                    }
                </div>
            </div>
        </>
    )
}
export default OnlineOfline
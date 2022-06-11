import React from 'react'
import styles from '../styles/HakatonFoto.module.css'
import Image from 'next/image';
import { FiX } from "react-icons/fi";
const data = [
    {
        id: 1,
        image: '/hakatonFotoImg.png',
    },
    {
        id: 2,
        image: '/hakatonFotoImg.png',
    },
    {
        id: 3,
        image: '/hakatonFotoImg.png',
    },
    {
        id: 4,
        image: '/hakatonFotoImg.png',
    },
    {
        id: 5,
        image: '/hakatonFotoImg.png',
    },
    {
        id: 6,
        image: '/hakatonFotoImg.png',
    },
    {
        id: 7,
        image: '/hakatonFotoImg.png',
    }
]

export default function HakatonFoto() {

    const [modalActive, setModalActive] = React.useState(0);

    const closeModal = () => {
        setModalActive(0);
    }

    const openModal = (e, num) => {
        e.stopPropagation();
        setModalActive(num);
    }

    const buttonclkc = () => {
        setModalActive(0);
    }

    return (
        <div className={styles.hakatonFoto}>
            <h3 className={styles.hakatonFoto_title}>Foto</h3>

            <div className={styles.hakatonFoto_wrapper}>
                {
                    data.map(({ id, image }) => (
                        <div
                            key={id}
                            onClick={closeModal}
                            className={modalActive === id ? styles.modalImg : styles.hakatonFoto_card}
                        >
                            <div className={styles.modalWrap}>
                                <button type='button' onClick={buttonclkc} className={styles.iconTimes}>
                                    <FiX color='rgba(240, 248, 255, 0.952)' size={30} />
                                </button>
                                <div
                                    onClick={(e) => openModal(e, id)}
                                >
                                    <Image src={image} width={296} height={178} alt={image} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button type='button'>Yana yuklash</button>
        </div>
    )
}

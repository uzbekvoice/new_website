import React from 'react'
import styles from '../styles/HakatonFoto.module.css'
import Image from 'nexr/image';
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
    },
    {
        id: 8,
        image: '',
    }
]

export default function HakatonFoto() {
    return (
        <div className={styles.hakatonFoto}>
            <h3 className={styles.hakatonFoto_title}>Foto</h3>

            <div className={styles.hakatonFoto_wrapper}>
                {
                    data.map(({ id, image }) => (
                        <div key={id} className={styles.hakatonFoto_card}>
                            <Image src={image} width={296} height={178} alt={image} />
                        </div>
                    ))
                }
            </div>

            <button type='button'>Yana yuklash</button>
        </div>
    )
}

import React, { useState } from 'react'
import styles from '../styles/ResursMain.module.css'

const dataParts = [
    {
        id: 1,
        name: 'Games'
    },
    {
        id: 2,
        name: 'Self'
    },
    {
        id: 3,
        name: 'Culture'
    },
    {
        id: 4,
        name: 'Programming'
    },
    {
        id: 5,
        name: 'Health'
    },
    {
        id: 6,
        name: 'Machine Learning'
    },
    {
        id: 7,
        name: 'DS'
    }
]

const dataPartInfo = [
    {
        id: 1,
        title: 'Спиртовые краски',
        descr: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.',
        img: '/cat.png'
    },
    {
        id: 2,
        title: 'Спиртовые краски',
        descr: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.',
        img: '/cat.png'
    },
    {
        id: 3,
        title: 'Спиртовые краски',
        descr: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.',
        img: '/cat.png'
    },
    {
        id: 4,
        title: 'Спиртовые краски',
        descr: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.',
        img: '/cat.png'
    },
    {
        id: 5,
        title: 'Спиртовые краски',
        descr: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.',
        img: '/cat.png'
    }
]

const ResursMain = () => {
    const [active, setActive] = useState(1);

    return (
        <div className={styles.resursMain}>
            <h4 className={styles.resursMainTitle}>Discover what matters to you</h4>
            <div className={styles.parts}>
                {
                    dataParts.map(({ id, name }) => (
                        <button
                            type='button'
                            key={id}
                            onClick={() => setActive(id)}
                            className={active == id && styles.activeBtn}
                        >
                            {name}
                        </button>
                    ))
                }
            </div>

            <div className={styles.partInfo}>
                {
                    dataPartInfo.map(({ id, title, descr, img }) => (
                        <div className={styles.resursCard} key={id}>
                            <div className={styles.resursCardBody}>
                                <h5>{title}</h5>
                                <p>{descr}</p>
                                <a href='#'>
                                    Узнать больше
                                    <img src='/chevron-right.svg' />
                                </a>
                            </div>
                            <div className={styles.resursCardHeader}>
                                <img src={img} alt='image' />
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.partInfoMobile}>
                {
                    dataPartInfo.map(({ id, title, descr, img }) => (
                        <div className={styles.resursMobileCard} key={id}>
                            <div className={styles.resursMobileCardHeader}>
                                <img src={img} alt='image' />
                            </div>

                            <div className={styles.resursMobileCardBody}>
                                <h5>{title}</h5>
                                <p>{descr}</p>
                                <a href='#'>
                                    Узнать больше
                                    <img src='/chevron-right.svg' />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ResursMain
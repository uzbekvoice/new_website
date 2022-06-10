import React from 'react'
import styles from '../styles/YangilikByIdRelevantTheme.module.css'
var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const data = [
    {
        id: 1,
        image: "/cat.png",
        title: "Спиртовые краски",
        desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.",
        date: "22.04.2022"
    },
    {
        id: 2,
        image: "/cat.png",
        title: "Спиртовые краски",
        desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.",
        date: "22.04.2022"
    },
    {
        id: 3,
        image: "/cat.png",
        title: "Спиртовые краски",
        desc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to the end.",
        date: "22.04.2022"
    },
]

const YangilikByIdRelevantTheme = () => {
    const Responsive = {
        0: {
            items: 1,
            margin: 5,
        },

        580: {
            items: 1,
            margin: 10,
        },

        900: {
            items: 3,
            margin: 20,
        },

        1200: {
            items: 4,
            margin: 20,
        },

        1400: {
            items: 4,
            margin: 10,
        }
    }

    return (
        <div className={styles.yangilikByIdRelevantTheme}>
            <h3 className={styles.relevantThemeTitle}>Мавзуга оид</h3>

            <div className={styles.parent}>
                {data.map(function (el) {
                    return (
                        <div className={styles.box} key={el.id}>
                            <div className={styles.boxHeader}>
                                <img src={el.image} alt="image" key={el.id} />
                            </div>
                            <div className={styles.boxBody}>
                                <h3 className={styles.title}>{el.title}</h3>
                                <h5 className={styles.desc}>{el.desc}</h5>
                                <div className={styles.flexClass}>
                                    <a href="#">
                                        Узнать больше
                                        <img src='/chevron-right.svg' />
                                    </a>
                                    <p className={styles.ppp}>{el.date}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className={styles.moreBtn}>Yana yuklash</button>

            <div className={styles.mobileSlider}>
                <h4>Смотрите еще</h4>
                <OwlCarousel 
                className={styles.slider} 
                loop 
                margin={10} 
                responsive={Responsive} 
                autoplay 
                autoplayTimeout={300000}
                dots={true}
                >
                    {data.map(function (el) {
                        return (
                            <div className={styles.box} key={el.id}>
                                <div className={styles.boxHeader}>
                                    <img src={el.image} alt="image" key={el.id} />
                                </div>
                                <div className={styles.boxBody}>
                                    <h3 className={styles.title}>{el.title}</h3>
                                    <h5 className={styles.desc}>{el.desc}</h5>
                                    <div className={styles.flexClass}>
                                        <a href="#">
                                            Узнать больше
                                            <img src='/chevron-right.svg' />
                                        </a>
                                        <p className={styles.ppp}>{el.date}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default YangilikByIdRelevantTheme
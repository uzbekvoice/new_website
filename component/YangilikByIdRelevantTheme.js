import React, { useState } from 'react'
import styles from '../styles/YangilikByIdRelevantTheme.module.css'
var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Link from 'next/link';

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const YangilikByIdRelevantTheme = ({ data }) => {

    const { locale, query } = useRouter()
    const [more, setMore] = useState(3);

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
            <h3 className={styles.relevantThemeTitle}>{
                locale === "uz-UZ" ?
                    'Mavzuga oid'
                    : locale === "ru-RU" ?
                        'По теме'
                        : 'On the subject'
            }</h3>

            <div className={styles.parent}>
                {data
                    .filter(p => p.languages_code === locale && p.news_id !== parseInt(query.yangilikById) && p.news_id !== null)
                    .slice(0, more)
                    .map((el) => {
                        return (
                            <div className={styles.box} key={el.id}>
                                <div className={styles.boxHeader}>
                                    <img src={`https://admin.uzbekvoice.ai/assets/${el.news_image}`} alt={el.news_image} key={el.id} />
                                </div>
                                <div className={styles.boxBody}>
                                    <h3 className={styles.title}>{el.news_title}</h3>
                                    <h5 dangerouslySetInnerHTML={{ __html: el.news_content.split(" ", 20).join(' ') }} className={styles.desc}></h5>
                                    <div className={styles.flexClass}>
                                        <Link href={`/yangilik/${el.news_id}`}>
                                            <a>
                                                {
                                                    locale === "uz-UZ" ?
                                                        'Batafsil'
                                                        : locale === "ru-RU" ?
                                                            'Узнать больше'
                                                            : 'Read more'
                                                }
                                                <img src='/chevron-right.svg' />
                                            </a>
                                        </Link>
                                        <p className={styles.ppp}>{el.data_created.slice(0, 10)}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <button className={styles.moreBtn} onClick={() => setMore(more + 3)}>{
                locale === "uz-UZ" ?
                    'Yana yuklash'
                    : locale === "ru-RU" ?
                        'Загрузить больше'
                        : 'Load more'
            }</button>

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
                    {data
                        .filter(p => p.languages_code === locale && p.news_id !== parseInt(query.yangilikById) && p.news_id !== null)
                        .map((el) => {
                            return (
                                <div className={styles.box} key={el.id}>
                                    <div className={styles.boxHeader}>
                                        <img src={`https://admin.uzbekvoice.ai/assets/${el.news_image}`} alt={el.news_image} key={el.id} />
                                    </div>
                                    <div className={styles.boxBody}>
                                        <h3 className={styles.title}>{el.news_title}</h3>
                                        <h5 dangerouslySetInnerHTML={{ __html: el.news_content.split(" ", 20).join(' ') }} className={styles.desc}></h5>
                                        <div className={styles.flexClass}>
                                            <Link href={`/yangilik/${el.news_id}`}>
                                                <a>
                                                    {
                                                        locale === "uz-UZ" ?
                                                            'Batafsil'
                                                            : locale === "ru-RU" ?
                                                                'Узнать больше'
                                                                : 'Read more'
                                                    }
                                                    <img src='/chevron-right.svg' />
                                                </a>
                                            </Link>
                                            <p className={styles.ppp}>{el.data_created.slice(0, 10)}</p>
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
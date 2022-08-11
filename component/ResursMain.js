import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import styles from '../styles/ResursMain.module.css'

const ResursMain = ({ data }) => {
    const [tagFilter, setTagFilter] = useState('java');

    const { locale } = useRouter();

    let tags = [];
    let tags2 = [];
    const filterData = data.filter((p) => p.languages_code === locale)

    for (let i = 0; i < filterData.length; i++) {
        tags = [...tags, filterData[i].resource_tags]
    }

    for (let i = 0; i < tags.length; i++) {
        for (let j = 0; j < tags[i].length; j++) {
            tags2 = [...tags2, tags[i][j]]
        }
    }

    const filterTag = (value) => {
        setTagFilter(value)
    }

    return (
        <div className={styles.resursMain}>
            {
                locale === "uz-UZ" ?
                    <h4 className={styles.resursMainTitle}>Siz uchun nima muhimligini bilib oling</h4>
                    : locale === "ru-RU" ?
                        <h4 className={styles.resursMainTitle}>Узнайте, что важно для вас</h4>
                        : <h4 className={styles.resursMainTitle}>Discover what matters to you</h4>
            }
            <div className={styles.parts}>
                {
                    tags2
                        .map((value, i) =>
                            <button
                                type='button'
                                key={i}
                                onClick={() => filterTag(value)}
                                className={tagFilter == value && styles.activeBtn}
                            >
                                {value}
                            </button>
                        )
                }
            </div>

            {
                data
                    .filter((p) => p.languages_code === locale
                        && p.resource_tags.includes(tagFilter)
                    )
                    .map(({
                        id, resource_author, resource_content, resource_image, resource_link, resource_tags, resource_title
                    }) =>
                        <div key={id}>
                            <div className={styles.partInfo}>
                                <div className={styles.resursCard} key={id}>
                                    <div className={styles.resursCardBody}>
                                        <h5>{resource_title}</h5>
                                        <span dangerouslySetInnerHTML={{ __html: resource_content }}></span>
                                        <Link href={resource_link}>
                                            <a>
                                                Узнать больше
                                                <img src='/chevron-right.svg' />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={styles.resursCardHeader}>
                                        <img src={`https://admin.uzbekvoice.ai/assets/${resource_image}`} alt='image' />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.partInfoMobile}>
                                <div className={styles.resursMobileCard} key={id}>
                                    <div className={styles.resursMobileCardHeader}>
                                        <img src={`https://admin.uzbekvoice.ai/assets/${resource_image}`} alt='image' />
                                    </div>

                                    <div className={styles.resursMobileCardBody}>
                                        <h5>{resource_title}</h5>
                                        <span dangerouslySetInnerHTML={{ __html: resource_content }}></span>
                                        <Link href={resource_link}>
                                            <a>
                                                Узнать больше
                                                <img src='/chevron-right.svg' />
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
            }
        </div>
    )
}

export default ResursMain
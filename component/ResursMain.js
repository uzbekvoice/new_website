import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import styles from '../styles/ResursMain.module.css'

const ResursMain = ({ data }) => {
    const [active, setActive] = useState(1);
    console.log(data, 'resurs');

    const { locale } = useRouter();

    return (
        <div className={styles.resursMain}>
            <h4 className={styles.resursMainTitle}>Discover what matters to you</h4>

            {
                data.filter((p) => p.languages_code === locale)
                    .map(({
                        id, resource_author, resource_content, resource_image, resource_link, resource_tags, resource_title
                    }) =>
                        <div key={id}>

                            <div className={styles.parts}>
                                {
                                    resource_tags.map((value, i) => (
                                        <button
                                            type='button'
                                            key={id}
                                            onClick={() => setActive(i)}
                                            className={active == i && styles.activeBtn}
                                        >
                                            {value}
                                        </button>
                                    ))
                                }
                            </div>

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

                        </div>)
            }
        </div>
    )
}

export default ResursMain
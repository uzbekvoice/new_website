import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/YangiliByIdHero.module.css'

const YangilikByIdHero = ({ data }) => {
  const { locale } = useRouter()
  const dataFilter = data.data.filter(p => p.languages_code === locale)[0]
  // console.log(dataFilter);
  return (
    <div className={styles.yangilikByIdHero}>
      <div className={styles.heroImg}>
        <img src={`https://admin.uzbekvoice.ai/assets/${dataFilter.news_image}`} alt='news-img' />
      </div>

      <div className={styles.heroBody}>
        <p className={styles.heroDate}>
          {dataFilter.data_created.slice(0, 10) + ' ' + dataFilter.data_created.slice(11, 16)}
        </p>
        <div className={styles.heroTitleWrapper}>
          <h3>{dataFilter.news_title}</h3>
          <div className={styles.heroTitleRight}>
            <span>
              {
                locale === "uz-UZ" ?
                  'Ulashish:'
                  : locale === "ru-RU" ?
                    'Поделиться в:'
                    : 'Share to:'
              }
            </span>
            <div className={styles.iconWrapper}>
              <img src='/facebookNews.svg' alt='facebook' />
            </div>
            <div className={styles.iconWrapper}>
              <img src='/twitterNews.svg' alt='twitter' />
            </div>
          </div>
        </div>

        <div className={styles.heroDescr}>
          {dataFilter.news_content}
        </div>
      </div>
    </div>
  )
}

export default YangilikByIdHero
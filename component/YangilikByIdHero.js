import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/YangiliByIdHero.module.css'
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton
} from 'next-share';

const YangilikByIdHero = ({ data }) => {
  const { locale } = useRouter()
  const router = useRouter()
  const dataFilter = data.data.filter(p => p.languages_code === locale)[0]

  return (
    <div className={styles.yangilikByIdHero}>
      <div className={styles.heroImg}>
        <img src={`https://content.uzbekvoice.ai/assets/${dataFilter.news_image}`} alt='news-img' />
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

            <FacebookShareButton url={`${'https://' + router.domainLocales[0].domain + '/' + router.locale + router.asPath}`}>
              <img src='/facebookNews.svg' alt='facebook' />
            </FacebookShareButton>

            <TwitterShareButton url={`${'https://' + router.domainLocales[0].domain + '/' + router.locale + router.asPath}`} >
              <img src='/twitterNews.svg' alt='twitter' />
            </TwitterShareButton>

            <TelegramShareButton url={`${'https://' + router.domainLocales[0].domain + '/' + router.locale + router.asPath}`}>
              <img src='/telegramNews.svg' alt='tg' />
            </TelegramShareButton>
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
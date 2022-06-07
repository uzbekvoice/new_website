import React from 'react'
import styles from '../styles/YangiliByIdHero.module.css'

const YangilikByIdHero = () => {
  return (
    <div className={styles.yangilikByIdHero}>
      <div className={styles.heroImg}>
        <img src='/cat.png' alt='news-img' />
      </div>

      <div className={styles.heroBody}>
        <p className={styles.heroDate}>22.04.2022 в 23:21</p>
        <div className={styles.heroTitleWrapper}>
          <h3>Спиртовые Краски</h3>
          <div className={styles.heroTitleRight}>
            <span>Поделиться в:</span>
            <div className={styles.iconWrapper}>
              <img src='/facebookNews.svg' alt='facebook' />
            </div>
            <div className={styles.iconWrapper}>
              <img src='/twitterNews.svg' alt='twitter' />
            </div>
          </div>
        </div>

        <ul className={styles.heroDescr}>
          <li>
            Дорогие друзья,
          </li>

          <li>
            Техническую информацию по краскам вы сможете найти на нашем сайте в соответсвующем разделе. Здесь мы хотели бы описать основные серии спиртовых красок, которые производит наша компания тем простым и обиходным способом, которым привыкли общаться наши клиенты. И так мы производим спиртовые краски следующих серий:
          </li>

          <li>1. Поверхностные для печати на БОПП, ОПП - ASP
          </li>
          <li>2. Поверхностные для печати на Полиэтилене - ASPE
          </li>
          <li>3. Поверхностные краски для PVC (термоусадка) - ASTU
          </li>
          <li>4. Поверхностная краска для PP (для мешков с коронацией) - SP
          </li>
          <li>5. Поверхностная краска для PP (для мешков без коронации) - SPL
          </li>
          <li>6. Краска для ламинации на БОПП, ОПП - ASL
          </li>
          <li>7. Отдельная серия для ламинации на PET. При этом Эта же серия подходит для печати на БОПП и ОПП - ASPET</li>

          <li>
            Есть еще несколько специальных серий для печати на толстом полиэтилене или же специальная серия светостойких красок, серия для кисломолочных продуктов или же серия для глубокой заморозки. Все эти серии выпускаются в малом количестве для отдельных клиентов по отдельному заказу, поэтому мы не стали включать их в общий список. И нам нравится числом семь. Одним словом, обращайтесь - будучи производственной компанией мы можем удовлетворить практически любые запросы наших клиентов.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default YangilikByIdHero
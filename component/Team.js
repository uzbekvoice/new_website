import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/TeamByID.module.css'

const Team = ({ data }) => {
  const { locale, query } = useRouter()
  const dataFilter = data.filter(p => p.languages_code === locale && p.hackathon_teams_id === parseInt(query.id))[0]
  // console.log(dataFilter);
  return (
    <div className={styles.yangilikByIdHero}>
      <div className={styles.heroImg}>
        <img src={`https://admin.uzbekvoice.ai/assets/${dataFilter.team_image}`} alt='news-img' />
      </div>

      <div className={styles.heroBody}>
        <div className={styles.heroTitleWrapper}>
          <h3>{dataFilter.team_title}</h3>
          <div className={styles.heroTitleRight}>{dataFilter.team_winner_place}</div>
        </div>

        <div className={styles.heroDescr} dangerouslySetInnerHTML={{ __html: dataFilter.team_project_content }}></div>

        <a href={`https://admin.uzbekvoice.ai/assets/${dataFilter.team_project_file}`} target="_blank">
          {
            locale === "uz-UZ" ?
            'Jamoa loyihasi'
            : locale === "ru-RU" ?
            'Командный проект'
            : 'Team project'
          }
          <img src='/chevron-right.svg' alt='chevron' />
        </a>
      </div>
    </div>
  )
}

export default Team
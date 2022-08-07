import React from 'react'
import Accordion from './Accordion'
import { useRouter } from 'next/router'
import styles from '../../styles/Accordion.module.css'
import HomeContent from '../../pages/homeapi/static.json'

export default function Question({ data }) {

  const { locale } = useRouter()

  return (
    <div className={styles.question}>
      {HomeContent.faq
      .filter((p) => p.languages_code ===locale)
      .map(({id, title}) =>
      <div key={id}> 
         <h3>{title}</h3>
      </div>
      )
      }
     

      {
        data.filter((p) => p.languages_code === locale)
          .map(({ id, answer, question }) =>
            <Accordion
              key={id}
              title={question}
              content={answer}
            />
          )
      }
    </div>
  )
}

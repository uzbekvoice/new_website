import React from 'react'
import Accordion from './Accordion'
import { useRouter } from 'next/router'
import styles from '../../styles/Accordion.module.css'

export default function Question({ data }) {

  const { locale } = useRouter()

  return (
    <div className={styles.question}>
      <h3>Savollar va Javoblar</h3>

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

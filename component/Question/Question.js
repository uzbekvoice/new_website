import React from "react";
import Accordion from "./Accordion";
import { useRouter } from "next/router";
import styles from "../../styles/Accordion.module.css";

export default function Question({ data, HomeContent }) {
  const { locale } = useRouter();

  return (
    <div className={styles.question}>
      {HomeContent.faq
        .filter((p) => p.languages_code === locale)
        .map((HomeContent, i) => {
          const { title } = HomeContent;
          return (
            <div key={i}>
              <h3>{title}</h3>
            </div>
          );
        })}

      <div className={styles.faqSides}>
        <div className={styles.main}>
          {data
            .filter((p) => p.languages_code === locale)
            .slice(0, 9)
            .map(({ id, answer, question }) => (
              <Accordion key={id} title={question} content={answer} />
            ))}
        </div>
        <div className={styles.emailInfo}>
          <span>Savollar bormi? </span> 
          Quyidagi linkda biz savollaringiz javob beramiz <br />
          <a className={styles.emailLink} href="mailto:uzbekvoice-ai@gmail.com">
            uzbekvoice-ai@gmail.com
          </a>
          <div className={styles.faqButton}>
            Savol qoldirish
          </div>
        </div>
      </div>
    </div>
  );
}

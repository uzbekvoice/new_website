import React from "react";
import styles from "../styles/Step.module.css";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Step({ steps, HomeContent }) {
  const { locale } = useRouter()

  return (
    <div className={styles.content}>
   {locale === "uz-UZ" ? (
                      <h3>Ovoz yig'ish bosqichlari</h3>
                    ) : locale === "ru-RU" ? (
                      <h3>Этапы кампании сбора голосов</h3>
                    ) : (
                      <h3>Voice collection campaign phases</h3>
                    )}
      <div className={styles.container}>

        {
          steps
            .filter(p => p.languages_id === locale)
            .map(({ contest_stages_id, contest_status, contest_title, contest_period, contest_expactations, contest_result, contest_hours, home_contest_expactations }) =>
              <div className={styles.card} key={contest_stages_id}>
                <div className={styles.text}>
                  <h4>{contest_title}</h4>
                  <h5 className={'bosqich ' + `${contest_status}`}>{contest_status}</h5>
                </div>
                <div className={styles.middle}>
                  <span>{contest_hours}</span>
                  <p>{home_contest_expactations}</p>
                  {/* {
                    !(contest_status === 'yakunlangan' || contest_status === 'законченный' || contest_status === 'finished') ?
                      <p>{contest_expactations}</p>
                      :
                      <p>{contest_result}</p>
                  } */}
                </div>
                <div className={styles.cardFooter}>
                  <div className={contest_period.length < 4 ? styles.data_empty + ' ' + styles.data : styles.data}>
                    <p>{contest_period}</p>
                  </div>
                  {
                    contest_stages_id < 3 &&
                    HomeContent.steps
                      .filter((p) => p.languages_code === locale)
                      .map((value) =>
                        <Link href={`/bosqich/${contest_stages_id}`}>
                          <a>
                            {value.button} <FiChevronRight size={23} />{" "}
                          </a>
                        </Link>
                      )
                  }
                </div>
              </div>
            )
        }
      </div>

      <hr />
      <div className={styles.line}></div>
    </div>
  );
}

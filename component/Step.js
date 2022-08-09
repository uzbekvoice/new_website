import React from "react";
import styles from "../styles/Step.module.css";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Step({ steps, HomeContent }) {
  const { locale } = useRouter()

  const data = steps.filter(p => p.languages_id === locale);

  console.log(data);

  return (
    <div className={styles.content}>
      {
        HomeContent.steps
          .filter((p) => p.languages_code === locale)
          .map((value) =>
            <h3> {value.title} </h3>
          )
      }
      <div className={styles.container}>

        {
          steps
            .filter(p => p.languages_id === locale)
            .map(({ contest_stages_id, contest_status, contest_title, contest_expactations, contest_result }) =>
              <div className={styles.card} key={contest_stages_id}>
                <div className={styles.text}>
                  <h4>{contest_title}</h4>
                  <h5 className={'bosqich ' + `${contest_status}`}>{contest_status}</h5>
                </div>
                <div className={styles.data}>
                  <p>2021 yil oktyabr - dekabr</p>
                </div>
                <div className={styles.middle}>
                  {
                    !(contest_status === 'yakunlangan' || contest_status === 'законченный' || contest_status === 'finished') ?
                      <>
                        <span>{contest_expactations.slice(0, 3)}+</span>
                        <p>{contest_expactations.slice(4, contest_expactations.length)}</p>
                      </>
                      :
                      <>
                        <span>{contest_result.slice(0, 3)}+</span>
                        <p>{contest_result.slice(4, contest_result.length)}</p>
                      </>
                  }
                </div>
                {
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
            )
        }


        {/* <div className={styles.card}>
          <div className={styles.text}>
            <h4> 1- Bosqich tanlovi </h4>{" "}
            <div className={styles.text2}>
              <h5>davom etmoqda</h5>
            </div>
          </div>
          <div className={styles.data}>
            <p>2021 yil oktyabr - dekabr</p>
          </div>
          <div className={styles.middle}>
            <span>1k+</span> <p>Soat ovozli ma'lumotlar yig'ildi</p>
          </div>
          <a href="#">
            Batafsil <FiChevronRight size={23} />
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.text}>
            <h4> 1- Bosqich tanlovi </h4>{" "}
            <div className={styles.text3}>
              <h5>tez kunda</h5>
            </div>
          </div>
          <div className={styles.data}>
            <p>2021 yil oktyabr - dekabr</p>
          </div>
          <div className={styles.middle}>
            <span>300+</span> <p>Soat ovozli ma'lumotlar yig'ildi</p>
          </div>
          <a href="#">
            Batafsil <FiChevronRight size={23} />{" "}
          </a>
        </div> */}
      </div>

      <hr />
      <div className={styles.line}></div>
    </div>
  );
}

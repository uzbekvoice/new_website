import React from "react";
import Image from "next/image";
import styles from "../styles/Marathon.module.css";
import archer1 from "../public/archer1.png";
import archer3 from "../public/archer3.png";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Marathon({ data }) {
  const { locale, query } = useRouter();

  return (
    <div>
      {data
        .filter((c) => c.languages_code === locale)
        .map(
          ({
            title,
            start_date,
            start,
            finish,
            title_stage,
            finish_date,
            goal_title
          }) => (
            <div className={parseInt(query.id) === 2 ? styles.goal__box: styles.formobile}>
              <h2 className={styles.box__title}>
                {title} <br />
                {title_stage}
              </h2>
              <div className={styles.status}>
                {/* <p>Faol</p> */}
              </div>

              <div className={styles.deadline}>
                <p className={styles.deadline__date}>
                  {start} <br />
                  {start_date}
                </p>
                <p className={styles.deadline__date}>
                  {finish} <br />
                  {finish_date}
                </p>
              </div>
              <h3 className={styles.aimtext}>{goal_title}</h3>
              <div className={styles.archeryAssets}>
                <Image
                  className={styles.archerImage}
                  src={archer1}
                  alt="master"
                />
                <span className={styles.archerTarget}>
                  <Image
                    className={styles.archerImage}
                    src={archer3}
                    alt="target"
                  />
                  <p className={styles.timeInfo}>1000 soat</p>
                </span>
              </div>
              <div className={styles.status}>
                {parseInt(query.id) !== 2 ? (
                  <Link href="/bosqich/2">
                     {
                locale === "uz-UZ" ?
                    <a>Ishtirok etish</a>
                    : locale === "ru-RU" ?
                       <a>Участвоват</a>
                        : <a>Participate</a>
            }
                  </Link>
                ) : (
                  false
                )}
              </div>
            </div>
          )
        )}
    </div>
  );
}

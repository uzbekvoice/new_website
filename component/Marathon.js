import React from "react";
import Image from "next/image";
import styles from "../styles/Marathon.module.css";
import archer1 from "../public/archer1.png";
import archer2 from "../public/archer2.png";
import { useRouter } from "next/router";

export default function Marathon({ data }) {
  const { locale } = useRouter();

  return (
    <div>
      {data
        .filter((c) => c.languages_code === locale)
        .map(({title, start_date, start, finish, title_stage, finish_date, goal_title, goal}) => (
          <div className={styles.goal__box}>
            <h2 className={styles.box__title}>
              {title} <br/>
              {title_stage}
            </h2>
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
                  src={archer2}
                  alt="target"
                />
                <p className={styles.timeInfo}>{goal}</p>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}

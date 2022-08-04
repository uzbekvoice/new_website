import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Bosqich.module.css";
import Winners from "../component/Winners";
import Prizes from "../component/Prizes";
import BosqichPrizes from "../component/BosqichPrizes";


export async function getStaticProps() {
  const res = await fetch("https://commonvoice.mozilla.org/api/v1/uz/clips/leaderboard");
  const res2 = await fetch("https://api.ry.team/leaderboard/votes/all");
  const res3 = await fetch("https://new.uzbekvoice.ai/items/contest_stages_translations");

  const data = await res.json();
  const users = await res2.json();
  const dataContest = await res3.json();

  return {
    props: {
      users: data,
      userslist: users,
      dataContest
    },

  };
}


export default function Bosqich({ users, userslist, dataContest }) {

  const { locale } = useRouter();

  const data = dataContest.data.filter(p => p.languages_code === locale);
  const dataRules = data[0].contest_rules;
  // console.log(dataRules);

  return (
    <div className={styles.bosqichPage}>
      <div className={styles.isContinue}>yakunlangan</div>
      <h1>1-Bosqich konkurs tanlov</h1>
      <p className={styles.scheduleDate}>{data[0].contest_period}</p>

      <div className={styles.goal}>
        <div className={styles.card1}>
          <div className={styles.block}>
            <div className={styles.goalIcon}>
              <Image src="/bosqichIcon1.png" width={100} height={100} alt='bosqich' />
            </div>
          </div>
          <h2>Ko&apos;zlangan maqsad</h2>
          <p>
            {data[0].contest_expectations}
          </p>
        </div>
        <div className={styles.card2}>
          <div className={styles.block}>
            <div className={styles.goalIcon}>
              <Image src="/bosqichIcon2.svg" width={100} height={100} alt='bosqich2' />
            </div>
          </div>
          <h2>Erishilgan natija</h2>
          <p>
            {data[0].contest_results}
          </p>
        </div>
      </div>

      <BosqichPrizes />

      <div className={styles.rules}>
        <h2>Konkurs qoidalari</h2>
        <div className={styles.rulesCard}>
          {
            dataRules.map(({ contest_rule }, index) =>
              <div key={index} className={styles.rule1}>
                <h2 >RULE {index + 1}</h2>
                <p>
                  {contest_rule}
                </p>
              </div>
            )
          }
        </div>
      </div>

      <Winners users={users} userslist={userslist} />

      <Prizes />
    </div>
  );
}

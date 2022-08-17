import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Bosqich.module.css";
import Winners from "../../component/Winners";
import Prizes from "../../component/Prizes";
import BosqichPrizes from "../../component/BosqichPrizes";


export async function getServerSideProps() {
  const res = await fetch("https://commonvoice.mozilla.org/api/v1/uz/clips/leaderboard");
  const res2 = await fetch("https://api.ry.team/leaderboard/votes/all");
  const res3 = await fetch("https://content.uzbekvoice.ai/items/contest_stages_translations");
  const res4 = await fetch("https://content.uzbekvoice.ai/items/contest_gifts_translations");

  const data = await res.json();
  const users = await res2.json();
  const dataContest = await res3.json();
  const resGifts = await res4.json();

  return {
    props: {
      users: data,
      userslist: users,
      dataContest,
      resGifts
    },

  };
}

export default function Bosqich({ users, userslist, dataContest, resGifts }) {

  const { locale, query } = useRouter();

  const data = dataContest.data.filter(p => p.languages_id === locale && p.contest_stages_id === parseInt(query.id));
  const dataRules = data[0].contest_rules;
  const prize = [];

  for (const key in data[0]) {
    if (key.slice(-6) === "_image") {
      prize.push(data[0][key])
    }
  }

  return (
    <div className={styles.bosqichPage}>
      <div className={styles.isContinue + ' ' + data[0].contest_status + ' bosqich'}>{data[0].contest_status}</div>
      <h1>{data[0].contest_title}</h1>
      <p className={styles.scheduleDate}>{data[0].contest_period}</p>
      <div className={styles.goal}>
        <div className={styles.card1}>
          <div className={styles.block}>
            <div className={styles.goalIcon}>
              <Image src="/bosqichIcon1.png" width={100} height={100} alt='bosqich' />
            </div>
          </div>
          {
            locale === "uz-UZ" ?
              <h2>Ko&apos;zlangan maqsad</h2>
              : locale === "ru-RU" ?
                <h2>Поставленная цель</h2>
                : <h2>The intended purpose</h2>
          }
          <p>
            {data[0].contest_expactations}
          </p>
        </div>
        <div className={styles.card2}>
          <div className={styles.block}>
            <div className={styles.goalIcon}>
              <Image src="/bosqichIcon2.svg" width={100} height={100} alt='bosqich2' />
            </div>
          </div>
          {
            locale === "uz-UZ" ?
              <h2>Erishilgan natija</h2>
              : locale === "ru-RU" ?
                <h2>Достигнутый результат</h2>
                : <h2>The result achieved</h2>
          }
          <p>
            {data[0].contest_result}
          </p>
        </div>
      </div>

      <BosqichPrizes title={data[0].contest_gifts} resGifts={resGifts} />

      <div className={styles.rules}>
        {
          locale === "uz-UZ" ?
            <h2>Konkurs qoidalari</h2>
            : locale === "ru-RU" ?
              <h2>Правила конкурса</h2>
              : <h2>Contest rules</h2>
        }
        <div className={styles.rulesCard}>
          {
            dataRules.map(({ contest_rule }, index) =>
              <div key={index} className={styles.rule1}>
                {
                  locale === "uz-UZ" ?
                    <h2>QOIDA {index + 1}</h2>
                    : locale === "ru-RU" ?
                      <h2>ПРАВИЛО {index + 1}</h2>
                      : <h2>RULE {index + 1}</h2>
                }
                <p>
                  {contest_rule}
                </p>
              </div>
            )
          }
        </div>
      </div>

      <Winners bosqich={true} users={users} userslist={userslist} />

      {
        (data[0].contest_status !== 'faol' && data[0].contest_status !== 'active' && data[0].contest_status !=='активный') &&
        < Prizes title={data[0].contest_award_ceremony} prize={prize} galleryID="my-test-gallery" />
      }

    </div>
  );
}

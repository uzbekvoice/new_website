import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/Bosqich.module.css";
import Marathon from "../../../component/Marathon";
import Winners from "../../../component/Winners";
import Prizes from "../../../component/Prizes";
import BosqichPrizes from "../../../component/BosqichPrizes";
import Oromgoh from "../../../component/Oromgoh";
import OnlineOfline from "../../../component/OnlineOfline";
import InitiativePartners from "../../../component/InitiativePartners";
import HomeContent from "../../homeapi/static.json";
import Question from "../../../component/Question/Question";
import PhotoAlbom from "../../../component/PhotoAlbom";
import AboutOromgoh from "../../../component/AboutOromgoh";
import InitiativePartnersSteps from "../../../component/InitiativePartnersStep";
import VideoSection from "../../../component/VideoSection";

export async function getServerSideProps() {
  const res2 = await fetch(
    "https://common.uzbekvoice.ai/api/v1/clips/leaderboard"
  );
  const res = await fetch(
    "https://common.uzbekvoice.ai/api/v1/clips/votes/leaderboard"
  );
  const res3 = await fetch(
    "https://admin.uzbekvoice.ai/items/contest_stages_translations"
  );
  const res4 = await fetch(
    "https://admin.uzbekvoice.ai/items/contest_gifts_translations"
  );
  const res5 = await fetch("https://admin.uzbekvoice.ai/items/partners");

  const res6 = await fetch(
    "https://admin.uzbekvoice.ai/items/faq_translations"
  );

  const res7 = await fetch(
    "https://admin.uzbekvoice.ai/items/camp_page_translations"
  );
  const res8 = await fetch(
    "https://admin.uzbekvoice.ai/items/hackathons_translations_files"
  );
  const formdata = await fetch("https://admin.uzbekvoice.ai/items/camp_form");

  const data = await res.json();
  const users = await res2.json();
  const dataContest = await res3.json();
  const resGifts = await res4.json();
  const partners = await res5.json();
  const faq = await res6.json();
  const camp = await res7.json();
  const photo = await res8.json();
  const form = await formdata.json();

  return {
    props: {
      users: data,
      userslist: users,
      dataContest,
      resGifts,
      partners,
      faq,
      camp,
      photo,
      form,
    },
  };
}

export default function Bosqich({
  users,
  userslist,
  dataContest,
  resGifts,
  partners,
  faq,
  camp,
  photo,
  form,
}) {
  const { locale, query } = useRouter();

  const data = dataContest.data.filter(
    (p) =>
      p.languages_id === locale && p.contest_stages_id === parseInt(query.id)
  );
  const dataRules = data[0].contest_rules;

  const prize = [];

  for (const key in data[0]) {
    if (key.slice(-6) === "_image") {
      prize.push(data[0][key]);
    }
  }

  return (
    <div className={styles.bosqichPage}>
      {parseInt(query.id) !== 2 ? (
        <>
          <div
            className={
              styles.isContinue + " " + data[0].contest_status + " bosqich"
            }
          >
            {data[0].contest_status}
          </div>
          <h1>{data[0].contest_title}</h1>
          <p className={styles.scheduleDate}>{data[0].contest_period}</p>
          <div className={styles.goal}>
            <div className={styles.card1}>
              <div className={styles.block}>
                <div className={styles.goalIcon}>
                  <Image
                    src="/bosqichIcon1.png"
                    width={100}
                    height={100}
                    alt="bosqich"
                  />
                </div>
              </div>
              {locale === "uz-UZ" ? (
                <h2>Ko&apos;zlangan maqsad</h2>
              ) : locale === "ru-RU" ? (
                <h2>Поставленная цель</h2>
              ) : (
                <h2>The intended purpose</h2>
              )}
              <p>{data[0].contest_expactations}</p>
            </div>

            {data[0].contest_status !== "faol" &&
              data[0].contest_status !== "active" &&
              data[0].contest_status !== "активный" && (
                <div className={styles.card2}>
                  <div className={styles.block}>
                    <div className={styles.goalIcon}>
                      <Image
                        src="/bosqichIcon2.svg"
                        width={100}
                        height={100}
                        alt="bosqich2"
                      />
                    </div>
                  </div>
                  {locale === "uz-UZ" ? (
                    <h2>Erishilgan natija</h2>
                  ) : locale === "ru-RU" ? (
                    <h2>Достигнутый результат</h2>
                  ) : (
                    <h2>The result achieved</h2>
                  )}
                  <p>{data[0].contest_result}</p>
                </div>
              )}
          </div>
        </>
      ) : (
        <Marathon data={camp.data} />
      )}

      <BosqichPrizes title={data[0].contest_gifts} resGifts={resGifts} />

      {/* {parseInt(query.id) === 2 ? (
        <>
          <Oromgoh data={camp.data} />
          <OnlineOfline form={form.data} data={camp.data} />
          <AboutOromgoh data={camp.data} />
        </>
      ) : (
        false
      )} */}

      <div className={styles.rules}>
        {locale === "uz-UZ" ? (
          <h2>Konkurs qoidalari</h2>
        ) : locale === "ru-RU" ? (
          <h2>Правила конкурса</h2>
        ) : (
          <h2>Contest rules</h2>
        )}
        <div className={styles.rulesCard}>
          {dataRules.map(({ contest_rule, rule }, index) => (
            <div key={index} className={styles.rule1}>
              <h2>{rule}</h2>
              <p>{contest_rule}</p>
            </div>
          ))}
        </div>
      </div>

      <Winners bosqich={true} users={users} userslist={userslist} />
      <InitiativePartnersSteps HomeContent={HomeContent} partners={partners.data} />

      <Prizes
        title={data[0].contest_award_ceremony}
        prize={prize}
        galleryID="my-test-gallery"
      />

      {parseInt(query.id) === 2 ? (
        <div>
          <VideoSection />
          {/* <PhotoAlbom data={photo.data}/> */}
          <Question data={faq.data} HomeContent={HomeContent} />
        </div>
      ) : (
        false
      )}
    </div>
  );
}

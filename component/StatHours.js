import React from "react";
import styles from "../styles/Stathours.module.css";
import { useRouter } from "next/router";

export default function StatHours() {
  const { locale } = useRouter();

  return (
    <div className={styles.hammasi}>
      <div className={styles.texts}>
        {locale === "uz-UZ" ? (
          <h3>Qancha jumla - nechi soat</h3>
        ) : locale === "ru-RU" ? (
          <h3>Сколько предложений - сколько часов</h3>
        ) : (
          <h3>How many sentences - how many hours</h3>
        )}

        {locale === "uz-UZ" ? (
          <p>
            Qancha jumla yigish va yigilgan jumlalar qancha soatlik yozilgan
            ovoz aylantirish
          </p>
        ) : locale === "ru-RU" ? (
          <p>
            Сколько предложений собрать и сколько часов собранных предложений
            превратить в записанный голос
          </p>
        ) : (
          <p>
            How many sentences to collect and how many hours of collected
            sentences to turn the recorded voice
          </p>
        )}
      </div>
      <div className={styles.main}>
        <div className={styles.diagramms}>
          <p className={styles.firstp}>
            9000 <br />
            {locale === "uz-UZ"
              ? "matn bor"
              : locale === "ru-RU"
              ? "предложений"
              : "sentences"}
          </p>
          <p className={styles.secondp}>
            {locale === "uz-UZ"
              ? "1 soat ovoz"
              : locale === "ru-RU"
              ? "1 час голосового запися"
              : "1 hour voice recording"}
          </p>
          <div className={styles.background}></div>
          x1
        </div>
        <div className={styles.diagramms}>
          <p>
            270 000 <br />
            {locale === "uz-UZ"
              ? "matn bu"
              : locale === "ru-RU"
              ? "предложений это"
              : "sentenses is"}
          </p>
          <div className={styles.background}>
            300{" "}
            {locale === "uz-UZ"
              ? "soat ovoz"
              : locale === "ru-RU"
              ? "час голосового запися"
              : "hour voice recording"}
          </div>
          x2
        </div>
        <div className={styles.diagramms}>
          <p>
            900 000 <br />
            {locale === "uz-UZ"
              ? "matn bu"
              : locale === "ru-RU"
              ? "предложений это"
              : "sentenses is"}
          </p>
          <div className={styles.background}>1000 {locale === "uz-UZ"
              ? "soat ovoz"
              : locale === "ru-RU"
              ? "час голосового запися"
              : "hour voice recording"}</div>
          x3
        </div>
        <div className={styles.diagramms}>
          <p>
            1 800 000 <br />
            {locale === "uz-UZ"
              ? "matn bu"
              : locale === "ru-RU"
              ? "предложений это"
              : "sentenses is"}
          </p>
          <div className={styles.background}>2000 {locale === "uz-UZ"
              ? "soat ovoz"
              : locale === "ru-RU"
              ? "час голосового запися"
              : "hour voice recording"}</div>
          x4
        </div>
        <div className={styles.diagramms}>
          <p>
            9 000 000
            <br />
            {locale === "uz-UZ"
              ? "matn bu"
              : locale === "ru-RU"
              ? "предложений это"
              : "sentenses is"}
          </p>
          <div className={styles.background}>10000 {locale === "uz-UZ"
              ? "soat ovoz"
              : locale === "ru-RU"
              ? "час голосового запися"
              : "hour voice recording"}</div>
          x5
        </div>
      </div>
    </div>
  );
}

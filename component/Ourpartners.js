import React from "react";
import styles from "../styles/Ourpartners.module.css";
import HomeContent from '../pages/homeapi/static.json'
import { useRouter } from "next/router";
import Link from "next/link";
export default function Ourpartners() {

  const { locale } = useRouter();

  return (
    <div className={styles.partners}>
      <div className={styles.detail}>
        {HomeContent.ourpartner
          .filter((p) => p.languages_code === locale)
          .map((HomeContent, i) => {
            const { title, desc, button } = HomeContent;
            return (
              <div key={i}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link href="/hamkorlar">
                  <a>{button}
                    <img src='/arrow-left-white.png' />
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
      <div className={styles.imgunit}>
        <div className={styles.blur}></div>
        <img src="/puzzle.png" alt="puzzle" />
      </div>
    </div>
  );
}

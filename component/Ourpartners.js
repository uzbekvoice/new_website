import React from "react";
import styles from "../styles/Ourpartners.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function OurPartners({ data }) {

  const { locale } = useRouter();
  return (
    data.data.filter((p) => p.languages_code === locale)
      .map(value =>
        <div key={value.id} className={styles.partners}>
          <div className={styles.detail}>
            <div>
              <h2>{value?.partnership_title}</h2>
              <p>{value?.partnership_text}</p>
              <Link href="/hamkorlar">
                <a>{value?.partnership_button}
                  <img src='/arrow-left-white.png' />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.imgunit}>
            <div className={styles.blur_bg}></div>
            <img src="/puzzle.png" alt="puzzle" />
          </div>
        </div>
      )
  );
}

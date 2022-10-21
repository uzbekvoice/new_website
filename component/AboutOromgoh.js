import React from "react";
import styles from "../styles/AboutOromgoh.module.css";
import { useRouter } from "next/router";

export default function AboutOromgoh({ data }) {
  const { locale } = useRouter();
  const dates = data.filter((c) => c.languages_code === locale);
  // console.log(dates);
  return (
    <>
      {dates.map(({ about_oromgoh, oromgoh_text }) => (
        <div className={styles.container}>
          <h1>{about_oromgoh}</h1>
      <div className={styles.description} dangerouslySetInnerHTML={{__html : oromgoh_text}}>

      </div>
        </div>
      ))}
    </>
  );
}

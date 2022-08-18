import React from "react";
import styles from "../styles/Ourpartners.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Ourpartners(props) {
  const { locale } = useRouter();
  const { HomeContent } = props;
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
                  <a>{button}</a>
                </Link>
              </div>
            );
          })}
      </div>
      <div className={styles.imgunit}>
        <Image src="/robot.png" width={432} height={476} alt="robot" />
      </div>
    </div>
  );
}

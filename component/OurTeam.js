import React from "react";
import styles from "../styles/OurTeam.module.css";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";


export default function OurTeam({ data, HomeContent }) {
  const { locale } = useRouter();
  // console.log(data);
  return (
    <div className={styles.ourteam}>
      {HomeContent.team
        .filter((p) => p.languages_code === locale)
        .map((HomeContent, i) => {
          const { title } = HomeContent;
          return (
            <div key={i}>
              <h3>{title}</h3>
            </div>
          );
        })}

      <div className={styles.firstblock}>
        {data.map(({ id, profile_image, profile_link, profile_name, telegram_link }) => (
          <div className={styles.item} key={id}>
            <div className={styles.avatarimg}>
              <img
                src={`https://admin.uzbekvoice.ai/assets/${profile_image}`}
                alt="partners1"
              />
            </div>

            <h4>{profile_name}</h4>
            <div>
              <Link href={profile_link}>
                <a className={styles.FaLinkedin}>
                  <FaLinkedin size={22} />
                </a>
              </Link>
              <Link href={telegram_link}>
                <a>
                  <FaTelegramPlane size={22} />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import styles from "../styles/OurTeam.module.css";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";


export default function OurTeam({ data, HomeContent }) {
  const { locale } = useRouter();

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
        {data
        .filter((p) => p.languages_code === locale)
        .map(({ id, profile_image, profile_linkedin, profile_name, profile_role, profile_tg }) => (
          <div className={styles.item} key={id}>
            <div className={styles.avatarimg}>
              <img
                src={`https://admin.uzbekvoice.ai/assets/${profile_image}`}
                alt="partners1"
              />
            </div>

            <h4>{profile_name}</h4>
            <h5>{profile_role}</h5>
            <div>
              <Link href={profile_linkedin}>
                <a className={styles.FaLinkedin}>
                  <FaLinkedin size={22} />
                </a>
              </Link>
              <Link href={profile_tg}>
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

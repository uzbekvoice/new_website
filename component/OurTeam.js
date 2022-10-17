import React from "react";
import styles from "../styles/OurTeam.module.css";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";

export default function OurTeam({ data }) {
  const { locale } = useRouter();
 

  return (
    <div className={styles.ourteam}>

      {locale === "uz-UZ" ? (
        <h3>Uzbekvoice Jamoasi</h3>
      ) : locale === "ru-RU" ? (
        <h3>Команда Узбеквоисе</h3>
      ) : (
        <h3>Uzbekvoice Team</h3>
      )}

      <div className={styles.firstblock}>
        {data
          .filter((p) => p.languages_code === locale)
          .map(
            ({
              team_members_id,
              profile_image,
              profile_linkedin,
              profile_name,
              profile_tg,
              profile_role,
            }) => (
              <div key={team_members_id}>
                {team_members_id !== null && (
                  <div  className={styles.item} >
                    <div className={styles.avatarimg}>
                      <img
                        src={`https://admin.uzbekvoice.ai/assets/${profile_image}`}
                        alt="partners1"
                      />
                    </div>

                    <h4>{profile_name}</h4>
                    <p>{profile_role}</p>
                    <div>
                      <Link href={profile_linkedin}>
                        <a className={styles.FaLinkedin}>
                          <FaLinkedin size={20} />
                        </a>
                      </Link>
                      <Link href={profile_tg}>
                        <a>
                          <FaTelegramPlane size={20} />
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
      </div>
    </div>
  );
}

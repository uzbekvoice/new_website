import React from "react";
import styles from "../styles/OurTeam.module.css";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import HomeContent from "../pages/homeapi/static.json";
import {useRouter} from 'next/router'

export default function OurTeam({ data }) {
  const { locale } = useRouter();
  // console.log(data);
  return (
    <div className={styles.ourteam}>
      {HomeContent.team
      .filter((p) => p.languages_code === locale)
      .map(({id, title})=>
      <div key={id}>
      <h3>{title}</h3>
        </div>
      )
      }
     
      <div className={styles.flex}>
        <div className={styles.firstblock}>
          {data.map(({ id, profile_image, profile_link, profile_name }) => (
            <div className={styles.item} key={id}>
              <div className={styles.avatarimg}>
                <img
                  src={`https://admin.uzbekvoice.ai/assets/${profile_image}`}
                  width={150}
                  height={150}
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
                <Link href="/">
                  <a>
                    <FaTelegramPlane size={22} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

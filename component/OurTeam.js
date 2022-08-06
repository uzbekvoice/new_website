import React from "react";
import styles from "../styles/OurTeam.module.css";
import Link from 'next/link'
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function OurTeam({ data }) {
  // console.log(data);
  return (
    <div className={styles.ourteam}>
      <h3>Uzbekvoice Jamoasi</h3>
      <div className={styles.flex}>

        <div className={styles.firstblock}>

          {
            data.map(({ id, profile_image, profile_link, profile_name }) =>
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
                  <Link href='/'>
                    <a>
                      <FaTelegramPlane size={22} />
                    </a>
                  </Link>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

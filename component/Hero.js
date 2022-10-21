import React from "react";
import styles from "../styles/Hero.module.css";
import { useRouter } from "next/router";

export default function Hero(props) {
  const { locale } = useRouter();

  const { HomeContent } = props;

  return (
    <div className={styles.header__content}>
      <div className={styles.header__content_text}>
        {HomeContent.content
          .filter((p) => p.languages_code === locale)
          .map((HomeContent, i) => {
            const { title, description, button1, button2 } = HomeContent;
            return (
              <div key={i}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.header__content_block}>
                  <a href="https://t.me/UzbekVoiceBot">{button1}</a>

                  <div className={styles.header__content_info}>
                    <img
                      src="/telegramm-blue.png"
                      width={23}
                      height={18}
                      alt="telegramicon"
                      quality={75}
                    />
                    <a href="https://t.me/joinchat/P84ptL81sN8yNWRi">
                      {button2}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <video
        poster="/video-poster.jpg"
        src="/newvideo.mp4"
        controls
        muted
        loop
    
        // autoPlay
      ></video>
    </div>
  );
}

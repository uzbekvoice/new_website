import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Uzbekvoice.ai - o'zbek tilini kompyuterga o'rgatish tashabbusi
        </title>
        <meta name="description" content="Uzbekvoice.ai - o'zbek tilini kompyuterga o'rgatish tashabbusi" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.header__content}>
        <div className={styles.header__content_text}>
          <h1>O‘zbek nutqini kompyuterga o‘rgatish tashabbusi</h1>
          <p>
          Ovozli asistentlar moliya, transport, telekom, chakana savdo,
            sog’liqni saqlash, ta’lim va boshqa ko‘p sohalarda qo‘llanadi.
          </p>

          <div className={styles.header__content_block}>
            <a
              className="header__content-text-btn"
              href="http://commonvoice.mozilla.org/uz/"
            >
              Loyihada ishtirok etish
            </a>


            <div className={styles.header__content_info}>
              <img src="./telegramm-blue.png" />
              <a href="https://t.me/joinchat/P84ptL81sN8yNWRi">
                Telegram jamoa
              </a>
            </div>
          </div>
        </div>
        <video
          poster="./video-poster.jpg"
          src="./video.mp4"
          controls
          muted
          loop
          autoPlay
        ></video>
      </div>
    </div>
  );
}

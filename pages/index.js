import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Uzbekvoice.ai - o&apos;zbek tilini kompyuterga o&apos;rgatish
          tashabbusi
        </title>
        <meta
          name="description"
          content="Uzbekvoice.ai - o'zbek tilini kompyuterga o'rgatish tashabbusi"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.header__content}>
        <div className={styles.header__content_text}>
          <h1>O&apos;zbek nutqini kompyuterga o&apos;rgatish tashabbusi</h1>
          <p>

          </p>

          <div className={styles.header__content_block}>
            <a href="http://commonvoice.mozilla.org/uz/">
              Loyihada ishtirok etish
            </a>

            <div className={styles.header__content_info}>
              <Image
                src="/telegramm-blue.png"
                width={23}
                height={18}
                alt="telegramicon"
                quality={100}
              />
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
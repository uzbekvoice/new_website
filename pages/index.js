import Head from "next/head";
import Slider from "../component/Carousel";
import Hero from "../component/Hero";
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
        <Hero/>
      <Slider />

      </Head>
      <div className={styles.header__content}>
        <div className={styles.header__content_text}>
          <h1>O&apos;zbek nutqini kompyuterga o&apos;rgatish tashabbusi</h1>
          <p>
          Ovozli asistentlar moliya, transport, telekom, chakana savdo,
            sog&apos;liqni saqlash, ta&apos;lim va boshqa ko&apos;p sohalarda qo&apos;llanadi.
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
                quality={75}
              />
              <a href="https://t.me/joinchat/P84ptL81sN8yNWRi">
                Telegram jamoa
              </a>
            </div>
          </div>
        </div>
        <video
          poster="./videoposter.jpg"
          src="./video.mp4"
          controls
          muted
          loop
          // autoPlay
        ></video>

        
      </div>
      <Slider/>

    </div>
  );
}

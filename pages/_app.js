import Layout from "../component/Layout";
import Head from "next/head";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <>
      <NextNProgress color="blueviolet" />
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />

          {locale === "uz-UZ" ? (
            <>
              <title>
                {" "}
                Uzbekvoice.ai - o&apos;zbek tilini kompyuterga o&apos;rgatish
                tashabbusi
              </title>
            </>
          ) : locale === "ru-RU" ? (
            <>
              <title>
                {" "}
                Uzbekvoice.ai - Инициатива по обучению узбекской речи на
                компьютере
              </title>
              <meta
                name="description"
                content=" Uzbekvoice.ai - Инициатива по обучению узбекской речи на
                компьютере"
              />
            </>
          ) : (
            <>
              <title>
                {" "}
                Uzbekvoice.ai - An initiative to teach Uzbek speech to computers
              </title>
              <meta
                name="description"
                content="Uzbekvoice.ai - An initiative to teach Uzbek speech to computers"
              />
            </>
          )}

          {/* <meta
            name="description"
            content="Uzbekvoice.ai - An initiative to teach Uzbek speech to computers"
          /> */}
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

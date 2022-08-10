import Layout from "../component/Layout";
import Head from "next/head";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNProgress color="blueviolet" />
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
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
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;



import Layout from "../component/Layout";
import Head from "next/head";
import "../styles/globals.css";
import LoadingSpinner from "../component/LoadingSpinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 1000);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <>
      {
        loading ?
          <LoadingSpinner />
          :
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
      }
    </>
  );
}

export default MyApp;



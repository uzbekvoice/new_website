import Head from "next/head";
import Slider from "../component/Carousel";
import Contribution from "../component/Contribution";
import Hero from "../component/Hero";
import Stat from "../component/Stat";
import Step from "../component/Step";
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
      <Hero />
      <Slider />
      <Stat />
      <Step />
      <Contribution />
    </div>
  );
}

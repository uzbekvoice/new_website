import Head from "next/head";
import Slider from "../component/Carousel";
import Contribution from "../component/Contribution";
import Hero from "../component/Hero";
import InitiativePartners from "../component/InitiativePartners";
import Ourpartners from "../component/Ourpartners";
import OurTeam from "../component/OurTeam";
import Question from "../component/Question/Question";
import Stat from "../component/Stat";
import Step from "../component/Step";
import TopUser from "../component/TopUser";

export async function getStaticProps() {
  const res = await fetch("https://commonvoice.mozilla.org/api/v1/uz/clips/leaderboard" );
  const res2 = await fetch("https://api.ry.team/leaderboard/votes/all");

  
  const data = await res.json();
  const users = await res2.json();

  return {
    props: {
      users: data,
      userslist: users,
    },
  
  };
}



export default function Home({users, userslist}) {
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
      <TopUser users={users} userslist={userslist}/>
     
      <Ourpartners />
      <InitiativePartners />
      <OurTeam />
      <Question />

    
    </div>
  );
}

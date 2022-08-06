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
import HomeContent from './homeapi/static.json'


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
       
     <Hero HomeContent={HomeContent}/> 
      <Slider HomeContent={HomeContent}/>
      <Stat HomeContent={HomeContent}/>
      <Step />
      <Contribution HomeContent={HomeContent}/>
      <TopUser users={users} userslist={userslist} HomeContent={HomeContent}/>
      <Ourpartners HomeContent={HomeContent} />
      <InitiativePartners HomeContent={HomeContent}/>
      <OurTeam />
      <Question />
    </div>
  );
}

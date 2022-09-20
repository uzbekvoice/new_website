import Slider from "../component/Carousel";
import Contribution from "../component/Contribution";
import Hero from "../component/Hero";
import InitiativePartners from "../component/InitiativePartners";
import Ourpartners from "../component/Ourpartners";
import OurTeam from "../component/OurTeam";
import Question from "../component/Question/Question";
import Step from "../component/Step";
import TopUser from "../component/TopUser";
import dynamic from "next/dynamic";
import { getDirectusClient } from "../lib/directus";
const Stat = dynamic(
  () => import('../component/Stat'),
  { ssr: false }
)

import HomeContent from './homeapi/static.json'

export async function getServerSideProps() {

  // const directus = await getDirectusClient();
  // const response = await directus.items("team_members_translations").readByQuery({
  //   fields: ["*"],
  // })
  const res = await fetch("https://commonvoice.mozilla.org/api/v1/uz/clips/leaderboard");
  const res2 = await fetch("https://commonvoice.mozilla.org/api/v1/uz/clips/votes/leaderboard");
  const res3 = await fetch('https://admin.uzbekvoice.ai/items/partners');
  const res4 = await fetch('https://admin.uzbekvoice.ai/items/team_members_translations');
  const res5 = await fetch('https://admin.uzbekvoice.ai/items/faq_translations');
  const res6 = await fetch('https://admin.uzbekvoice.ai/items/contest_stages_translations');


  const data = await res.json();
  const users = await res2.json();
  const partners = await res3.json();
  const teamMembers = await res4.json();
  const faq = await res5.json();
  const steps = await res6.json();

  return {
    props: {
      users: data,
      userslist: users,
      partners,
      teamMembers,
      faq,
      steps
    },

  };
}

export default function Home({ users, userslist, partners, teamMembers, faq, steps }) {

  return (
      <div>
        <Hero HomeContent={HomeContent} />
        <Slider HomeContent={HomeContent} />
        <Stat HomeContent={HomeContent} />
        <Step steps={steps.data} HomeContent={HomeContent} />
        <Contribution HomeContent={HomeContent} />
        <TopUser users={users} userslist={userslist} HomeContent={HomeContent} />
        <Ourpartners HomeContent={HomeContent} />
        <InitiativePartners HomeContent={HomeContent} partners={partners.data} />
        <OurTeam data={teamMembers.data} HomeContent={HomeContent} />
        <Question data={faq.data} HomeContent={HomeContent} />
      </div>
  );
}

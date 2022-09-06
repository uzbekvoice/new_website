import React from "react";
import HakatonFoto from "../../component/HakatonFoto";
import HakatonHero from "../../component/HakatonHero";
import HakatonJuri from "../../component/HakatonJuri";
import HakatonTeams from "../../component/HakatonTeams";
import InitiativePartners from "../../component/InitiativePartners";
import HomeContent from "../homeapi/static.json";
import HakatonForm from '../../component/HakatonForm'
import { useRouter } from "next/router";
import HakatonMentors from "../../component/HakatonMentors";

export default function Hakaton({ partners, hakatonHero, hakatonFoto, hakatonTeam, hakatonJury, mentor }) {

  const router = useRouter()
  const { query, locale } = router

  // console.log(hakatonHero.data);

  const status = hakatonHero.data.filter(p => p.languages_code === locale && p.hackathons_id === parseInt(query.id))[0].status


  return (
    <>
      <HakatonHero data={hakatonHero.data} />
      <InitiativePartners HomeContent={HomeContent} partners={partners.data} status={status} />
      {
        status !== 'active' ?
          <>
            <HakatonTeams data={hakatonTeam.data} />
            <HakatonFoto data={hakatonFoto.data} galleryID="gallery--responsive-images" />
            <HakatonJuri data={hakatonJury.data} />
            <HakatonMentors data={mentor.data} />
          </>
          : <HakatonForm />
      }
    </>
  );
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:8055/items/partners')
  const res2 = await fetch('http://localhost:8055/items/hackathons_translations')
  const res3 = await fetch('http://localhost:8055/items/hackathons_translations_files')
  const res4 = await fetch('http://localhost:8055/items/hackathon_teams_translations')
  const res5 = await fetch('http://localhost:8055/items/jury_translations')
  const res6 = await fetch('http://localhost:8055/items/hackathons_mentors_translations')

  const partners = await res.json();
  const hakatonHero = await res2.json();
  const hakatonFoto = await res3.json();
  const hakatonTeam = await res4.json();
  const hakatonJury = await res5.json();
  const mentor = await res6.json();

  return {
    props: {
      partners,
      hakatonHero,
      hakatonFoto,
      hakatonTeam,
      hakatonJury,
      mentor
    },

  };
}

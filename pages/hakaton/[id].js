import React from "react";
import HakatonFoto from "../../component/HakatonFoto";
import HakatonHero from "../../component/HakatonHero";
import HakatonJuri from "../../component/HakatonJuri";
import HakatonTeams from "../../component/HakatonTeams";
import InitiativePartners from "../../component/InitiativePartners";
import HomeContent from "../homeapi/static.json";

export default function hakaton({ partners, hakatonHero, hakatonFoto, hakatonTeam, hakatonJury }) {
  console.log(hakatonHero.data);
  return (
    <>
      <HakatonHero data={hakatonHero.data} />
      <InitiativePartners HomeContent={HomeContent} partners={partners.data} />
      <HakatonTeams data={hakatonTeam.data} /> 
      <HakatonFoto data={hakatonFoto.data} galleryID="gallery--responsive-images" />
      <HakatonJuri data={hakatonJury.data} />
    </>
  );
}

export async function getServerSideProps() {

  const res = await fetch('https://admin.uzbekvoice.ai/items/partners')
  const res2 = await fetch('https://admin.uzbekvoice.ai/items/hackathons_translations')
  const res3 = await fetch('https://admin.uzbekvoice.ai/items/hackathons_translations_files')
  const res4 = await fetch('https://admin.uzbekvoice.ai/items/hackathon_teams_translations')
  const res5 = await fetch('https://admin.uzbekvoice.ai/items/jury')

  const partners = await res.json();
  const hakatonHero = await res2.json();
  const hakatonFoto = await res3.json();
  const hakatonTeam = await res4.json();
  const hakatonJury = await res5.json();

  return {
    props: {
      partners,
      hakatonHero,
      hakatonFoto,
      hakatonTeam,
      hakatonJury
    },

  };
}

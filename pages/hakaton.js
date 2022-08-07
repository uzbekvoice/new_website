import React from "react";
import HakatonFoto from "../component/HakatonFoto";
import HakatonHero from "../component/HakatonHero";
import HakatonJuri from "../component/HakatonJuri";
import HakatonTeams from "../component/HakatonTeams";
import InitiativePartners from "../component/InitiativePartners";
import HomeContent from "./homeapi/static.json";

export default function hakaton({ partners, hakatonHeroData }) {
  return (
    <>
      <HakatonHero hakatonHeroData={hakatonHeroData.data} />
      <InitiativePartners HomeContent={HomeContent} partners={partners.data} />
      <HakatonTeams />
      <HakatonFoto />
      <HakatonJuri />
    </>
  );
}

export async function getStaticProps() {

  const res = await fetch('https://admin.uzbekvoice.ai/items/partners')
  const res2 = await fetch('https://admin.uzbekvoice.ai/items/hackathons_translations')

  const partners = await res.json();
  const hakatonHeroData = await res2.json();

  return {
    props: {
      partners,
      hakatonHeroData
    },

  };
}

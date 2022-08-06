import React from "react";
import HakatonFoto from "../component/HakatonFoto";
import HakatonJuri from "../component/HakatonJuri";
import HakatonTeams from "../component/HakatonTeams";
import InitiativePartners from "../component/InitiativePartners";
import HomeContent from "./homeapi/static.json";

export default function hakaton({partners}) {
  return (
    <>
      <InitiativePartners HomeContent={HomeContent} partners={partners.data} />
      <HakatonTeams />
      <HakatonFoto />
      <HakatonJuri />
    </>
  );
}

export async function getStaticProps() {

  const res3 = await fetch('https://admin.uzbekvoice.ai/items/partners')

  const partners = await res3.json();

  return {
    props: {
      partners
    },

  };
}

import React from "react";
import HakatonFoto from "../component/HakatonFoto";
import HakatonJuri from "../component/HakatonJuri";
import HakatonTeams from "../component/HakatonTeams";
import InitiativePartners from "../component/InitiativePartners";
import HomeContent from "./homeapi/static.json";

export default function hakaton() {
  return (
    <>
      <InitiativePartners HomeContent={HomeContent} />
      <HakatonTeams />
      <HakatonFoto />
      <HakatonJuri />
    </>
  );
}

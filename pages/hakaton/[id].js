import React, { useEffect, useState } from "react";``
import HakatonFoto from "../../component/HakatonFoto";
import HakatonHero from "../../component/HakatonHero";
import HakatonJuri from "../../component/HakatonJuri";
import HakatonTeams from "../../component/HakatonTeams";
import HakatonForm from '../../component/HakatonForm'
import { useRouter } from "next/router";
import HakatonMentors from "../../component/HakatonMentors";
import InitiativePartnersHak from "../../component/InitiativePartnersHak";

export default function Hakaton({ partners, data, hakatonHero, hakatonFoto, hakatonTeam, hakatonJury, mentor }) {

  const [mounted, setMounted] = useState(false);

  

  const router = useRouter()
  const { query, locale } = router

  const status = hakatonHero.data.filter(p => p.languages_code === locale && p.hackathons_id === parseInt(query.id))[0].status

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <HakatonHero data={hakatonHero.data} />
      <InitiativePartnersHak data={data} partners={partners.data} status={status} />
      {
        status !== 'active' ?
          <div>
            <HakatonTeams data={hakatonTeam.data} />
            <HakatonFoto data={hakatonFoto.data} galleryID="gallery--responsive-images" />
            <HakatonJuri data={hakatonJury.data} />
            <HakatonMentors data={mentor.data} />
          </div>
          : <HakatonForm />
      }
    </div>
  );
}

export async function getServerSideProps() {

  const res = await fetch('https://admin.uzbekvoice.ai/items/partners')
  const res2 = await fetch('https://admin.uzbekvoice.ai/items/hackathons_translations')
  const res3 = await fetch('https://admin.uzbekvoice.ai/items/hackathons_translations_files')
  const res4 = await fetch('https://admin.uzbekvoice.ai/items/hackathon_teams_translations')
  const res5 = await fetch('https://admin.uzbekvoice.ai/items/jury_translations')
  const res6 = await fetch('https://admin.uzbekvoice.ai/items/hackathons_mentors_translations')
  const res7 = await fetch(
    "https://admin.uzbekvoice.ai/items/landing_page_translations"
  );

  const partners = await res.json();
  const hakatonHero = await res2.json();
  const hakatonFoto = await res3.json();
  const hakatonTeam = await res4.json();
  const hakatonJury = await res5.json();
  const mentor = await res6.json();
  const data = await res7.json();

  return {
    props: {
      partners,
      hakatonHero,
      hakatonFoto,
      hakatonTeam,
      hakatonJury,
      mentor,
      data
    },

  };
}

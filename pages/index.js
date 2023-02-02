import React from 'react'
import Slider from '../component/Carousel'
import ConvertingSpeech from '../component/ConvertingSpeech'
import ConvertingText from '../component/ConvertingText'
import FrequentlyCases from '../component/FrequentlyCases'
import HeroIndex from '../component/Index/HeroIndex'
import OurPartners from '../component/OurPartners'
import UnderstandMore from '../component/UnderstandMore'
import InitiativePartners from '../component/InitiativePartners'
import Question from "../component/Question/Question";

export default function Index({partners, faq}) {
  return (
    <div>
      <HeroIndex />
      <ConvertingSpeech />
      <Slider />
      <ConvertingText />
      <FrequentlyCases />
      <UnderstandMore />
      <OurPartners />
      <InitiativePartners partners={partners.data}/>
      <Question data={faq.data} />
    </div>
  )
}


export async function getServerSideProps() { 
  const res3 = await fetch("https://admin.uzbekvoice.ai/items/partners");

  const res5 = await fetch(
    "https://admin.uzbekvoice.ai/items/faq_translations"
  );

  const partners = await res3.json();
  const faq = await res5.json();

  return {
    props: {
      partners,
      faq,
    },
  };
}
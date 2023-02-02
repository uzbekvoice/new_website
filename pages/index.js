import React from 'react'
import Slider from '../component/Carousel'
import ConvertingSpeech from '../component/ConvertingSpeech'
import ConvertingText from '../component/ConvertingText'
import FrequentlyCases from '../component/FrequentlyCases'
import HeroIndex from '../component/Index/HeroIndex'
import UnderstandMore from '../component/UnderstandMore'
import InitiativePartners from '../component/InitiativePartners'
import Question from "../component/Question/Question";
import Ourpartners from '../component/Ourpartners'

export default function Index({partners, faq, data}) {
  
  return (
    <div>
      <HeroIndex data={data}/>
      <ConvertingSpeech data={data} />
      <Slider data={data} />
      <ConvertingText data={data}/>
      <FrequentlyCases data={data}/>
      <UnderstandMore data={data} />
      <Ourpartners data={data}  />
      <InitiativePartners data={data} partners={partners?.data}/>
      <Question data={faq?.data} />
    </div>
  )
}


export async function getServerSideProps() { 
  const res3 = await fetch("https://admin.uzbekvoice.ai/items/partners");

  const res5 = await fetch(
    "https://admin.uzbekvoice.ai/items/faq_translations"
  );
  const res = await fetch(
    "https://admin.uzbekvoice.ai/items/landing_page_translations"
  );

  const partners = await res3.json();
  const faq = await res5.json();
  const data = await res.json();

  return {
    props: {
      partners,
      faq,
      data
    },
  };
}
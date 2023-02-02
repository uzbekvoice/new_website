import React from 'react'
import PricingAllPlan from '../component/PricingAllPlan.jsx'
import PricingHero from '../component/PricingHero.jsx'
import Question from '../component/Question/Question'

const Pricing = ({faq}) => {
  
    return (
        <div>
            <PricingHero />
            <PricingAllPlan />
            <Question data={faq?.data} />
        </div>
    )
}

export default Pricing

export async function getServerSideProps() { 
    const res5 = await fetch(
      "https://admin.uzbekvoice.ai/items/faq_translations"
    );
    const faq = await res5.json();
  
    return {
      props: {
        faq,
      },
    };
  }
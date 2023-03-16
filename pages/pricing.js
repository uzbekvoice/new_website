import React from 'react'
import PricingAllPlan from '../component/PricingAllPlan.jsx'
import PricingHero from '../component/PricingHero.jsx'
import Question from '../component/Question/Question'

const Pricing = ({faq, pricing_rates, pricing}) => {
  console.log(pricing, 'pricing');
    return (
        <div>
            <PricingHero pricing_rates={pricing_rates} pricing={pricing} />
            <PricingAllPlan  pricing={pricing}/>
            <Question data={faq?.data} />
        </div>
    )
}

export default Pricing

export async function getServerSideProps() { 
    const res5 = await fetch(
      "https://admin.uzbekvoice.ai/items/faq_translations"
    );
    
    const res = await fetch(
      "https://admin.uzbekvoice.ai/items/pricing_rates"
    );
    
    const res2 = await fetch(
      "https://admin.uzbekvoice.ai/items/pricing_content_translations"
    );

    const faq = await res5.json();
    const pricing_rates = await res.json();
    const pricing = await res2.json();
  
    return {
      props: {
        faq,
        pricing_rates,
        pricing
      },
    };
  }
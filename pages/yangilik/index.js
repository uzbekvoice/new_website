import React from 'react';
import YangilikSection from '../../component/YangilikSection';

export default function yangilik({ data }) {
  
  return (
    <div>
      <YangilikSection data={data.data} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://content.uzbekvoice.ai/items/news_translations')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

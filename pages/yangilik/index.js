import React from 'react';
import YangilikSection from '../../component/Yangiliklar/YangilikSection';

export default function yangilik({ data }) {
  
  return (
    <div>
      <YangilikSection data={data.data} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://admin.uzbekvoice.ai/items/news_translations')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

import React from 'react'
import ResursMain from '../component/ResursMain'
import ResusHero from '../component/ResusHero'

export default function resus({ data }) {
  return (
    <div>
      <ResusHero />
      <ResursMain data={data.data} />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://admin.uzbekvoice.ai/items/resources_translations')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}
import React from 'react'
import ResursMain from '../component/ResursMain'
import ResusHero from '../component/ResusHero'

export default function resus({ data }) {
  return (
    <>
      <ResusHero />
      <ResursMain data={data.data} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8055/items/resources_translations')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}
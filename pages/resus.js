import React from 'react'
import ResursMain from '../component/ResursMain'

export default function resus({data}) {
  return (
    <>
        <ResursMain data={data.data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://admin.uzbekvoice.ai/items/resources_translations')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}
import React from 'react'
import QollanmaMain from '../component/QollanmaMain'

export default function guide({ data }) {
  return (
    <>
      <QollanmaMain data={data.data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://new.uzbekvoice.ai/items/guidelines_translations')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}

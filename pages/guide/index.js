import React from 'react'
import QollanmaMain from '../../component/QollanmaMain'

export default function guide({ data }) {
  return (
    <>
      <QollanmaMain data={data.data} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://admin.uzbekvoice.ai/items/guidelines_translations')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}

import React from 'react'
import YangilikByIdHero from '../../component/YangilikByIdHero'
import YangilikByIdRelevantTheme from '../../component/YangilikByIdRelevantTheme'

const YangilikById = ({ data }) => {

  return (
    <>
      <YangilikByIdHero data={data} />
      <YangilikByIdRelevantTheme />
    </>
  )
}

export default YangilikById

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://admin.uzbekvoice.ai/items/news_translations/?filter[news_id]=${params.yangilikById}`)
  const data = await res.json()

  return {
    props: { data },
  }
}
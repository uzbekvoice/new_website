import React from 'react'
import YangilikByIdHero from '../../component/YangilikByIdHero'
import YangilikByIdRelevantTheme from '../../component/YangilikByIdRelevantTheme'

const YangilikById = ({ data, dataTheme }) => {

  return (
    <>
      <YangilikByIdHero data={data} />
      <YangilikByIdRelevantTheme data={dataTheme.data} />
    </>
  )
}

export default YangilikById

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:8055/items/news_translations/?filter[news_id]=${params.yangilikById}`)
  const res2 = await fetch('http://localhost:8055/items/news_translations')
  const data = await res.json()
  const dataTheme = await res2.json()

  return {
    props: {
      data,
      dataTheme
    },
  }
}
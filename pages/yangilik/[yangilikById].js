import React from 'react'
import YangilikByIdHero from '../../component/YangilikByIdHero'
import YangilikByIdRelevantTheme from '../../component/YangilikByIdRelevantTheme'

const yangilikById = () => {
  
  return (
    <>
      <YangilikByIdHero />
      <YangilikByIdRelevantTheme />
    </>
  )
}

// yangilikById.getInitialProps = async (ctx) => {
//   const id = ctx.query.yangilikById;
  
//   const res = await fetch(`https://new.uzbekvoice.ai/items/news_translations/${id}`)
//   const data = await res.json()

//   return { data: data }
// }

export default yangilikById
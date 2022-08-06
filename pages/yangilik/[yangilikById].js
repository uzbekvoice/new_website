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

// export async function getStaticPaths() {
//   const res = await fetch('https://admin.uzbekvoice.ai/items/news_translations/')
//   const posts = await res.json()

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
  const paths = posts.data.map((post) => ({
    params: { yangilikById: toString(post.news_id) },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
=======
>>>>>>> Stashed changes
//   const paths = posts.data.map((post) => ({
//     params: { yangilikById: `${post.news_id}` },
//   }))
//   return { paths, fallback: true }
// }
<<<<<<< Updated upstream
=======
>>>>>>> 3bbc4a10e8a7c55cd56ba209b4f2b7d6d19e552c
>>>>>>> Stashed changes

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://admin.uzbekvoice.ai/items/news_translations/?filter[news_id]=${params.yangilikById}`)
  const data = await res.json()

  return {
    props: { data },
  }
}
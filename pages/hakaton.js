import React from 'react'
import HakatonFoto from '../component/HakatonFoto'
import HakatonHero from '../component/HakatonHero'
import HakatonJuri from '../component/HakatonJuri'
import HakatonTeams from '../component/HakatonTeams'

export default function hakaton() {
  return (
    <div>
      <HakatonHero />
      <div className='container__fluid'>
        <HakatonTeams />
        <HakatonFoto />
        <HakatonJuri />
      </div>
    </div>
  )
}

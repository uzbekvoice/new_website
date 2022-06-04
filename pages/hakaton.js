import React from 'react'
import HakatonFoto from '../component/HakatonFoto'
import HakatonJuri from '../component/HakatonJuri'
import HakatonTeams from '../component/HakatonTeams'

export default function hakaton() {
  
  return (
    <div className='container__fluid'>
      <HakatonTeams />
      <HakatonFoto />
      <HakatonJuri />
    </div>
  )
}

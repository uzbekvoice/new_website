import React from 'react'
import HakatonFoto from '../component/HakatonFoto'
import HakatonJuri from '../component/HakatonJuri'
import HakatonTeams from '../component/HakatonTeams'
import InitiativePartners from '../component/InitiativePartners'

export default function hakaton() {

  return (
    <>
      <InitiativePartners />
      <HakatonTeams />
      <HakatonFoto />
      <HakatonJuri />
    </>
  )
}

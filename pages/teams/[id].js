import React from 'react'
import Team from '../../component/Team';

const TeamByID = ({ data }) => {
        
    return (
        <>
            <Team data={data.data} />
        </>
    )
}

export default TeamByID

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:8055/items/hackathon_teams_translations`)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
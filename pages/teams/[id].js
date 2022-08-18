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
    const res = await fetch(`https://admin.uzbekvoice.ai/items/hackathon_teams_translations`)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
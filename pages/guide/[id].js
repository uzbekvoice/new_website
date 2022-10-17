import React from 'react'
import GuideByID from '../../component/GuideByID';

const GuideBy = ({ data }) => {
        
    return (
      
            <GuideByID data={data.data} />
     
    )
}

export default GuideBy

export async function getServerSideProps() {
    const res = await fetch('https://admin.uzbekvoice.ai/items/guidelines_translations')
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
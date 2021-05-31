import React from 'react'
import { useParams } from 'react-router'

export const Error404 = ({link}) => {
    const {id,board} = useParams()
    console.log(`id`, id)
    return (
        <div>
            <h1 className='m-10'>404: {id?'id':'thread'} Not Found {id || board}</h1>
        </div>
    )
}

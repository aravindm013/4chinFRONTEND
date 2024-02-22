import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Catalogue} from '../boards/components/Catalogue'

export const PopularThreads = () => {
    const url = 'http://localhost:5000/api/v1'
    const [catalogs,setCatalogs] = useState([])
    const [error, setError] = useState()
    useEffect(() => {
        const fetch = async () => {
            try {
                let response = await axios.get(url+'/popularthreads')
                response = response.data
                setCatalogs(response)
            } catch(err){
                console.log(err)
                setError(err)
            }
        }
        fetch()
    }, [])
    return (
        <div style={{marginTop:'20px'}}>
            <div className='mt-20 boards '>
                <h5 className='listname mb-0 p-1 redcolor'>Popular Threads</h5>
                <div className='d-flex flex-col borders popular-thread-item'>
                    <div className='row'>
                        {catalogs.length === 0 && <h1>Loading....</h1>}
                        {
                            catalogs.map(x=><Catalogue isPopular={true} data={x}/>)
                        }
                    </div>
                </div>
        </div>
        </div>
    )
}

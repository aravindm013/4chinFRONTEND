import React from 'react'

export const Boards = ({boards}) => {
    return (
        <div className='mt-20 boards ' >
            <h5 className='listname mb-0 p-1 redcolor'>Boards</h5>
            <div className='d-flex flex-col borders bg-white p-1' style={{height:'280px'}}>
                {
                    Object.keys(boards).map((key,i)=>{
                        
                        return(
                            <div className={String(i)}>
                                <li className='list-unstyled'>{key}</li>
                                <ul className='list-unstyled'>
                                    {boards[key].map(x=>{
                                        return <li className='list-item pr-1 m-1'><a className='list-item streched-link redcolor focus-red' href={'/boards'+x[1]}>{x[0]}</a></li>
                                    })}
                                </ul>
                            </div>
                        )
                        
                    })
                
                }
            </div>
        </div>
    )
}

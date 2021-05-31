import { useState } from "react"
import React from 'react'

export const Comment = ({data}) => {
    const {img,opComment,board,comment,title,createdAt} = data
    const [expand,setExpand] = useState(true)
    const url = 'http://localhost:3000/boards'
    
    return (
        <div  className={'row border m-2 comment thread'} style={title?{backgroundColor:'rgb(248, 230, 195)'}:{}}>
            <img onClick={(e)=>setExpand(expand=>!expand)} className='clg-image col-2 mb-1 mt-1 ' width={expand?'1000px':'200px'} src={`data:image/png;base64,${Buffer.from(data.img.data.data).toString('base64')}`} alt='Loading'/>
            <div className='col mt-3'>
                <h5 className='info'><input type='checkbox'/><span>Anonymous </span>{createdAt} No.<a href='#'>{Math.round(Math.random()*(10**8))}</a></h5>
                <p onClick={()=>console.log(expand)} className='col mt-3' style={{fontSize:'14px'}}>
                    {title && <h6>{title}</h6>}
                    {comment}
                </p>
            </div>
        </div>
        
    )
}

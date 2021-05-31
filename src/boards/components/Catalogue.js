import React from 'react'

export const Catalogue = ({data}) => {
    const {img,opComment,board,title} = data
    const url = 'http://localhost:3000/boards'
    
    return (
        <div className='col-2 catalogue'>
            <a href={url+`${board}${data._id}`}><img className='p-2 clg-image' width='200px' src={`data:image/png;base64,${Buffer.from(data.img.data.data).toString('base64')}`} alt='Loading'/></a>
            {/* <h6>{title}</h6> */}
            <p><span>{title}:</span>{' '+opComment}</p>
        </div>
        // <div class="card">
        //     <img class="card-img-top" src={img} alt="Loading..."/>
        //     <div class="card-body">
        //         <p class="card-text">
        //         {comment}
        //         </p>
                
        //     </div>
        // </div>
    )
}

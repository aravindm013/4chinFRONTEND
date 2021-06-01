import React from 'react'
const url = 'http://localhost:3000'
export const HomeNav = () => {
    return (
        <div style={{textAlign:'center'}}>
        <div className='btn-group buttongroup btn-small '>
            <a href={url+'/'}><button className='pt-0 pd-1 pl-3 pr-3 btn btn-secondary redcolor'>Home</button></a>
            <a href={url+'/faq'}><button className='pt-0 pd-1 pl-3 pr-3 btn btn-secondary redcolor'>FAQ</button></a>
            <a href={url+'/news'}><button className='pt-0 pd-1 pl-3 pr-3 btn btn-secondary redcolor'>News</button></a>
            <a href={'#'}><button className='pt-0 pd-1 pl-3 pr-3 btn btn-secondary redcolor'>Blog</button></a>
            {/* <a href={'#'}><button className='pt-0 pd-1 pl-3 pr-3 btn btn-secondary redcolor'>FAQ</button></a> */}
        </div>
        </div>
    )
}

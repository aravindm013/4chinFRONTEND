import React, { useState, useEffect } from 'react'
import { Router, Redirect, useParams } from 'react-router'
import { Catalogue } from './components/Catalogue'
import axios from 'axios'
import { Form } from './components/Form'

const example = [
    {
        img:'https://picsum.photos/150/150',
        comment:'Anim tempor commodo laboris culpa id esse sunt occaecat est consequat aute id voluptate sit.'
    },
    {
        img:'https://picsum.photos/150/150',
        comment:'Nisi amet labore adipisicing do nulla consectetur pariatur.'
    },
    {
        img:'https://picsum.photos/150/150',
        comment:'Anim tempor commodo laboris culpa id esse sunt occaecat est consequat aute id voluptate sit.'
    },
    {
        img:'https://picsum.photos/150/150',
        comment:'Anim tempor commodo laboris culpa id esse sunt occaecat est consequat aute id voluptate sit.'
    },
    {
        img:'https://picsum.photos/150/150',
        comment:'Anim tempor commodo laboris culpa id esse sunt occaecat est consequat aute id voluptate sit.'
    },
    {
        img:'https://picsum.photos/150/150',
        comment:'Anim tempor commodo laboris culpa id esse sunt occaecat est consequat aute id voluptate sit.'
    },
    {
        img:'https://picsum.photos/150/150',
        comment:'Anim tempor commodo laboris culpa id esse sunt occaecat est consequat aute id voluptate sit.'
    }
]
const url = 'http://localhost:5000/api/v1'
export const Board = () => {
    const [catalogs,setCatalogs] = useState([])
    const [showFrom,setShowForm] = useState(false)
    useEffect(async () => {
        try {
            const response = await axios.get(url+'/catalogs/'+board)
            setCatalogs(response.data)
            console.log(response.data)
        } catch(err){
            console.error(err)
        }
    }, [])

    let {board} = useParams()
    
    const findBoard = (board)=>{
        if(board=='a')return '/a/ Anime & Manga'
        if(board=='v')return '/v/ Video Games'
        if(board=='vg')return '/vg/ Video Games General'
        if(board=='a')return '/a/ Anime & Manga'
        if(board=='in')return '/in/ Interests'
        else return false
        //More to be added
    }
    
    return (
        <div className='container-fluid Board'>
            {!findBoard(board) && <Redirect to={'/404/boards/'+board}/>}
            <div style={{textAlign:'center'}}>
                <img  className='mt-3 ' alt='loading' src='https://picsum.photos/270/115'></img>
                <h2 className='redcolor'>{findBoard(board)}</h2>
                <hr/>
                <button onClick={()=>setShowForm(!showFrom)} className='btn p-0 m-0'><h3 className='text-info'>[Start a thread]</h3></button>
                {showFrom && <Form isThread={false} board={board} />}
                <hr/>
                <form className='form-inline'>
                    <label>Sort by:</label>
                    <input type='text'/>

                </form><hr/>
            </div>
            <div className='row'>
                {
                    catalogs.map(x=><Catalogue data={x}/>)
                }
            </div>
            
        </div>
    )
}

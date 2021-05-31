import React, { useState, useEffect } from 'react'
import { Router, Redirect, useParams } from 'react-router'
import { Comment } from './components/Comment'
import axios from 'axios'
import { Form } from './components/Form'


const url = 'http://localhost:5000/api/v1'
export const Thread = () => {
    let {board,id} = useParams()
    console.log(board,id)
    const [comments,setComments] = useState([])
    const [redirect,setRedirect] = useState(false)
    const [showFrom,setShowForm] = useState(false)
    const [catalog,setCatalog] = useState([])

    useEffect(async () => {
        try {
            const res = await axios.get(url+'/findcatalog/'+id)
            console.log(res.data)
            setCatalog(res.data)
            
            if(!res.data)setRedirect((x)=>!x)
            const response = await axios.get(url+'/threads/'+id)
            setComments(response.data)
            console.log('threads',response.data)
        } catch(err){
            console.error(err)
        }
    }, [])

    
    
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
            {redirect && <Redirect to={'/404/thread/'+id}/>}
            <div style={{textAlign:'center'}}>
                <img  className='mt-3 ' alt='loading' src='https://picsum.photos/270/115'></img>
                <h2 className='redcolor'>{findBoard(board)}</h2>
                <hr/>
                <button onClick={()=>setShowForm(!showFrom)} className='btn p-0 m-0'><h3 className='text-info'>[POST]</h3></button>
                {showFrom && <Form isThread={true} board={board} id={id}/>}
                <hr/>
                <form className='form-inline'>
                    <label>Sort by:</label>
                    <input type='text'/>

                </form><hr/>
                
            </div>
            <div className=''>
                {catalog[0] && <Comment data={{...catalog[0],comment:catalog[0].opComment}}/>}
                    {
                        comments.map(x=><Comment data={x}/>)
                    }
            </div>
        </div>
    )
}

import axios from 'axios'
import React, { useState } from 'react'

export const Form = ({isThread,id,board}) => {
    const [comment,setComment] = useState('')
    const [file,setFile] = useState('')
    const [actualFile,setActual] = useState(null)
    
    const [title,setTitle] = useState('')
    const url = 'http://localhost:5000/api/v1'
    console.log(isThread?url+'/threads/'+id:url+'/catalogs/',isThread?'comment':'opComment','/'+board+'/' )
    const handleChange = (e) => {
        console.log( e.target.files[0])
        setActual(e.target.files[0])
        setFile(e.target.value)
    }
    const handleSubmit= async (e) => {
        e.preventDefault()
        
        const formData = new FormData()
        console.log('yooy', formData, 'asdzx', actualFile)
        formData.append('sampleFile',actualFile)
        formData.append('board','/'+board+'/')
        isThread?formData.append('comment',comment):formData.append('opComment',comment)
        !isThread && formData.append('title',title)
        try {
            const response= await axios.post(`${url}${isThread?'/threads/'+id:'/catalogs'}`,formData)
            console.log(response.data)
        }catch(err){
            console.error(err)
        }
    }
    return (
        <div className = 'thread-form' style={{textAlign:'center',marginTop:'-20px'}}>
            <form className = '' onSubmit={(e)=>handleSubmit(e)}>
                {!isThread && <label>Title</label>}<br/>
                {!isThread && <input className = '' value={title} onChange={(e)=>setTitle(e.target.value)}/>}<br/>
                <label>Comment</label><br/>
                <textarea value={comment} className = '' onChange={(e)=>setComment(e.target.value)}/><br/>
                <input value={file} className = 'ml-5' onChange={(e)=>handleChange(e)} type='file' /><br/>
                
                <input type='submit' />
            </form>
        </div>
    )
}

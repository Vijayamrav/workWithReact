import React,{useState} from 'react'

export const HelloWorld=()=>{
    const[personName,setPersonName]=useState('')
    return(
        <>
        
        <h1>Hello {personName}</h1>
        <input type="text" onChange={(e)=>setPersonName(e.target.value)}/>
        </>
    )
}

import { useState,useEffect } from "react"
export const UseEffect11=()=>{

    let [data1,setData]=useState(0)
    useEffect(()=>{
        setData(data1+1)
    },[data1])

    console.log(data1)
}
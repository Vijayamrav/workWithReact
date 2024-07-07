import { useState } from "react"
export const FunctionHook=()=>{
    const [counter,setCounter]=useState(0)
   
    return(
        <>
        <h1>Counter</h1>
        <h3>{counter}</h3>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        </>
    )
}
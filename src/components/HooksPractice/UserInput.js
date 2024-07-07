import { useState } from "react"
import { OnOffBtn } from "./OnOffButton";

export const UserInput=(isOn)=>{
    let initialValue={
        firstname:"",
        lastname:""
    }
    const [currentState,updateState]=useState(initialValue);
    const change=(event)=>{
        const {name,value}=event.target
         updateState(prevState=>({
            ...prevState,
            [name]:value

         }))
    }
    return(
        <>
        <input type="text" name="firstname" value={currentState.firstname} onChange={change}/>
        <input type="text" name="lastname"  value={currentState.lastname} onChange={change}/>
        {isOn && <h1>{currentState.firstname} {currentState.lastname}</h1>}
        </>
    )
}



           
        


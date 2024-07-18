import { Farm } from "./props3"
import React from "react"
export const FarmHouse=()=>{
     return(
        <>
        <Farm 
        farmerName="bangu"
        animals={['sheep','goat','chicken','buffalo']} />
        <Farm 
         farmerName="vijay"
         animals={['cows','chicken']}/> 
        </>
     )
}
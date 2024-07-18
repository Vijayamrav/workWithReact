import React from "react"
export const Farm=(props)=>{
   let  onHisFarm=[]
   
    onHisFarm=props.animals.map(animal=>
        <p>on his Farm he had {animal}</p>
    )
    console.log(onHisFarm)
   
    return(
        <>
          <h1>{props.farmerName} had a farm</h1>
          {onHisFarm}
        </>
    )
}
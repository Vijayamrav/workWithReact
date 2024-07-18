
// Show/Hide Password:
// Create a component that toggles between showing and hiding a 
// password field based on a showPassword boolean state.


import { useState } from "react"
export const SecurePassword=()=>{
    const [showPassword,setShowPassword]=useState(false)
    function handlePassword(){
        setShowPassword(!showPassword)
    }
    return(
        <>

        <input type={showPassword?"text":"password"}/>
        <button onClick={handlePassword}>{showPassword?"Hide":"Show"}</button>
        </>
    )
}
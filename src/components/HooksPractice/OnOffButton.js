import { Button, ButtonBase } from "@mui/material";
import { useState } from "react";

export const OnOffBtn=()=>{
    const [isOn,updateState]=useState("ON")
    const handleClick=()=>{
        updateState(prevState=>prevState==="OFF"?"ON":"OFF")
    }
    return(
        <>
        <Button variant="contained" onClick={handleClick}>{isOn}</Button>
        </>
    )
    }

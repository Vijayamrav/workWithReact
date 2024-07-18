import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import { GreetingMsg } from "../../GreetingMsg";


export const WelcomeMsg=(props)=>{
    
    return(
        <>
        {props.isLogin?<h1>{`hello ${props.message}`}</h1>:<GreetingMsg/>}
        </>
    )
}
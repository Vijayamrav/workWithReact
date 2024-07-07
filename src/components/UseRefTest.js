import { useRef } from "react";

export const FunctionInput=()=>{

    const inputRef=useRef(null)

    function focusInput(){
        inputRef.current.focus()
    }
    return(
        <>
        <input ref={inputRef} type="text" placeholder="click button to focus me"/>
        </>
    )

}
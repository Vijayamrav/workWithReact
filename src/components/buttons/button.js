 export const ButtonComponent=(prop)=>{
    const {text,bgColor,height,width,alternateText}=prop
    return(
        <>
        <button 
        style={{backgroundColor:bgColor,height:height,width:width,alt:alternateText}}
        >
            {text}
        </button>
        </>
    )
}



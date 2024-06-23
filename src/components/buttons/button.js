 const ButtonComponent=(prop)=>{
    const {text,height,width,onClick}=prop
    return(
        <>
        
        <button onClick={onClick}>{text}</button>
        </>
    )
}

export default ButtonComponent;

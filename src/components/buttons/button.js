 import '../styles/allstyles.css'
 const ButtonComponent=(prop)=>{
    const {text,height,width,onClick}=prop
    return(
        <>
        
        <button className="buttonClass" onClick={onClick}>{text}</button>
        </>
    )
}

export default ButtonComponent;

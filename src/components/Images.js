import './Images.css'
export const Images=(prop)=>{
    return(
      <img src={prop.src}  alt={prop.alt} className={prop.className}>
         
      </img>
    )
}
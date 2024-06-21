export function UnorderedList(){
    return (
        <>
        <h1>Bikes</h1>
       <ul><ListItems/></ul>
        </>
    )
}


const ListItems=()=>{
    return (
        
        <>
        
        {
            
        ['GT650','MT15','karishma350','DOMINOR400','R15V4'].map((value,index)=>{
            return <li key={index}><h3>{value}</h3></li>
        })
       }
        </>
    )
}


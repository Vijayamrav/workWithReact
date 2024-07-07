import Table from 'react-bootstrap/Table';


export const RecipieTable=(prop)=> {
    const {data}=prop
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>ingredients</th>
          <th>instructions</th>
          <th>PrepTime</th>
        </tr>
      </thead>
      <tbody>
        {
           data ? data.map(eachRecipie=>{
            const {id,name,ingredients,instructions}=eachRecipie
            return(
         <>  
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            {
              ingredients.map((eachIngredient,index)=>{
                return(
                    <p>{`${index+1}.${eachIngredient}`}</p>
                )
              })  
            }
          </td>
          <td>
            {
                instructions.map(eachInstruction=>{
                    return(
                        <>
                        <p>{eachInstruction}</p>
                        </>
                    )
                })
            }
          </td>
        </tr>
            </> 
            );
          }):alert("data is not fetched")
            }  
        
        
       
      </tbody>
    </Table>
  );
}


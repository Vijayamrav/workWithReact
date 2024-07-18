import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { Spinner1 } from './customspinners/searchSpinner';


export const RecipieTable=(prop)=> {
    const {data}=prop
    const [isLoading,setisLoading]=useState(true)
    useEffect(()=>{
      if(data && data.length>0){
         setisLoading(false)
      }
    },[data])
    if(isLoading){
      return <Spinner1/>
    }
   console.log(data[0]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>Image</th>
          <th>ingredients</th>
          <th>instructions</th>
          <th>cuisine</th>
        </tr>
      </thead>
      <tbody>
        {
           data.map(eachRecipie=>{
            const {id,name,ingredients,instructions}=eachRecipie
            return(
         <>  
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            {
              <img src={eachRecipie.image} height={100} width={100} alt="recipie"/>
            }
          </td>
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
          <td>
            <p>{eachRecipie.cuisine}</p>
          </td>
        </tr>
            </> 
            );
          })
            }  
        
        
       
      </tbody>
    </Table>
  );
}


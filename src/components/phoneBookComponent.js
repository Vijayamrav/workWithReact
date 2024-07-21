import { phoneData } from "../phoneBook";
import "../phoneTablestyles.css"
import { useState } from "react";

export const PhoneData=()=>{
    const [search,setSearch]=useState('')
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <>
        <input type="text" placeholder="search contacts" onChange={handleChange}/>
        <table className="table1">
            <tr>
              <th>ID</th>
              <th>FirstName</th>  
              <th>Lastname</th>
              <th>Email</th>  
              <th>Gender</th>  
              <th>Phone</th>      
            </tr>
              {
               phoneData.filter((item)=>{
                return search.toLowerCase()===""?item:item.first_name.toLowerCase().includes(search)
               }).map((data)=>(
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>{data.phone}</td>
                  </tr>
               ))
              }
        </table>
        </>
    )
}
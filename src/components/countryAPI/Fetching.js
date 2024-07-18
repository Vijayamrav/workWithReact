import axios from "axios";
import { useEffect,useState } from "react";
export const Country=()=>{
    const [countries,setCountries]=useState([])
    const [country,setCountry]=useState('')
    const [countryData,setCountryData]=useState([])
    useEffect(()=>{
        fetching()
    },[])
    async function fetching(){
        try{
          const response=await axios.get('https://restcountries.com/v3.1/all');
          const countriesData=response.data
        //   countriesData.map(eachCountry=>console.log(eachCountry.name.official))
       const result= nameExtarctor(countriesData)
       console.log(result,'result');
       setCountries(result)

        }
        catch(err){
            console.log("something went wrong")
        }
    }
    const nameExtarctor=(data)=>{
        return data.map((each)=>each.name.official)
    }
    const handleSelect=(event)=>{
        setCountry(event.target.value)
        fetchSelectedCountry(event.target.value)
    }
    const fetchSelectedCountry=async(countryName)=>{
       try{
        const response=await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        const countryData=response.data[0]
        console.log(countryData.flags);
        console.log(countryData)
        setCountryData(countryData)
       }
    
    catch(err){
        console.log("something went wrong")
    }
}
    
   
    return(
         <>
           <select value={country} onChange={handleSelect}>
           {countries.map((eachCountry,index)=><option value={eachCountry} key={index}>{eachCountry}</option>)}
           </select>
           <h1>{country}</h1>
           {Object.keys(countryData).length > 0 && (
        <>
          <h2>Capital city {countryData.capital[0]}</h2>
          <h2>Country flag {countryData.flag.png}</h2>
          <img src={countryData.flags.png} alt="flag" width={300} height={300} />
          <h2>Population {countryData.population}</h2>
          <h2>Area {countryData.area}</h2>
        </>
      )}
         </>
    )
}
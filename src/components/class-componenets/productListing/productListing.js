import { Component } from "react";

export class ProductListing extends Component{
   state={
    productListing:[],
    loading:true,
    error:null
   }
   componentDidMount(){
    this.fetchData();
   }
   fetchData=()=>{
      fetch("https://fakestoreapi.com/products")
      .then(response=>response.json())
      .then(response=>console.log(response))
      
   }

    render(){
        return(
            <>
            <h3>Product Listing page</h3>
            </>
        )
    }
}

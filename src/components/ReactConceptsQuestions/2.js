import { Spinner1 } from "../customspinners/searchSpinner";

export const Checkcontent=(a)=>{
    let isLoading=true;
    return(
      <>
      {isLoading?<Spinner1/>:<h1>Hello User</h1>}
      </>
    )

}
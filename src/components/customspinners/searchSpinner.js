import { Hourglass } from "react-loader-spinner"
import "../styles/spinnerStyles.css"
export const Spinner1=()=>{
   return(
    
    <div className="spinner1">
    <Hourglass
  visible={true}
  height="200"
  width="200"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
  </div>
    
   )
}
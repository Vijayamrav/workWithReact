import {Component} from 'react'
import './circles.css'
class GenerateCircle extends Component{
    render(){
        return(
            <>
            <div className="circle"></div>
            </>
        )
    }
}

export class BGenerateCircle extends Component{
    state={
        circles:[],
        
       
    }
    handleClick=()=>{
        this.setState(prevState=>({
         circles:[...prevState.circles,<GenerateCircle/>]
        }))
           
            
        
        console.log("button is clicked")
        
    }
    render(){
        return(
            <>
            <button onClick={
                this.handleClick 
                }
                >
                    Add Circle</button>
                    {
                       this.state.circles
                    }
            
                
                
                
            
            </>
        )
    }
}







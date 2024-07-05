import { Component } from "react";
class TestComponent extends Component{
    render(){
        return(
            <>
            <h3>Hello react</h3>
            </>
        )
        
        
    }
}
export class CheckState extends Component{

    state={
        array:[<TestComponent/>,<TestComponent/>,<TestComponent/>]
    }
      render(){
        return(
            <>
            <h3>{this.state.array}</h3>
            </>
        )
      }
    }

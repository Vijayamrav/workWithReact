import { Component } from "react"


export class ButtonClassComponent extends Component{
    state={
        text1:"subscribe",
        text2:"subscribed",
        isSubscribe:false
    }
    subscribeHandler=()=>{
        this.setState({
        isSubscribe:!this.state.isSubscribe
        })
    }

    render(){
        return(
            <>
            <button onClick={this.subscribeHandler} className="buttonClass">
            {this.state.isSubscribe?this.state.text2:this.state.text1}
            </button>
            {
                this.state.isSubscribe?(
                    <>
                <h1>welcome Vijay</h1>    
                <h1>You can access our premium content</h1>
                
                </>
                ):
                <h1>please subscribe to access our premium content</h1> 
            }
            </>
            

        )
    }
}
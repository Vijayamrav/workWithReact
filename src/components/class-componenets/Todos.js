import {Component} from "react"
import ButtonComponent from "../buttons/button"
export class Todos extends Component{
  state={
    todos:['Wake up at 7:00','learn react for 1 hour','learn aptitude']
  }
  todoHandler=()=>{
    this.setState({
        todos:[...this.state.todos,"attend online class at 2:20pm"]
    })
  }
  todoUpdateHandler=(index)=>{
    let newTodos=this.state.todos
    newTodos[index]="wake up at 10:00am"
    this.setState({
        todos:newTodos
    })
  }
 render(){
    return(
        <>
        <ol>
            {this.state.todos.map((eachTodo,index)=>{
               return (
                <>
                
               <li>{eachTodo}</li>
               <ButtonComponent text="Update" onClick={()=>this.todoUpdateHandler(index)}/>
               </>
               )
            })}
        </ol>
        <ButtonComponent text="Add todo" onClick={this.todoHandler} />
        
        </>
    )
 }
}
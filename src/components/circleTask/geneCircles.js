import {Component} from 'react'
import './circles.css'
import { Button, TextField, Typography, Grid } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


class CreationCircle extends Component{
   render(){
    return(
        <>
        <div class="circle"></div>
        </>
    )
   }    
}

export class  GenerateCircle extends Component{
    state={
        circles:[],
        count:0,
        addCount:0,
        deleteCount:0
    }
    handleClick=()=>{
        this.setState(prevState=>({
            circles:[...prevState.circles,<CreationCircle key={this.state.circles.length}/>],
            count:this.state.count+1,
            addCount:this.state.addCount+1
        }))
    }
    deleteCircle=()=>{
        if(this.state.circles.length>0){
            const updatedCircles=this.state.circles.slice(0,-1);
            this.setState({
               circles:updatedCircles,
               count:this.state.count-1,
               deleteCount:this.state.deleteCount+1
            })
        }
    }
    render(){
        return(
            <>
            <div className="countInfo">
            <h2 className="counter">CurrentCircles:{this.state.count}</h2>
            <h2 className="counter">Circles Added:{this.state.addCount}</h2>
            <h2 className="counter">Circles Deleted:{this.state.deleteCount}</h2>
            </div>
            <div className="container">
              
            <Fab size="medium" color="secondary" aria-label="add" className="btn" onClick={this.handleClick}>
  <AddIcon />
</Fab>
        
        <Fab size="medium" color="secondary" aria-label="delete" className="btn" onClick={this.deleteCircle}>
            <DeleteIcon/>
        </Fab>
          {
            this.state.circles
          }
          </div>
          
            
           
          
            </>
        )
    }
}









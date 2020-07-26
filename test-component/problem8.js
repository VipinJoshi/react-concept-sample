/*
value of a is 3 
*/
import React, { Component } from "react";

export default class Test8 extends Component {
   state ={
       x:{
           a: 1,b:200
       }
   };

    
    render() {

        return (<div>
            <button onClick={
                ()=>{
                    const obj = this.state.x;
                    obj.a=2;
                    obj.a++;
                    this.setState({
                        x:obj
                    })
                }
            }>Change x</button>
            <span> output: {this.state.x.a}</span>
        </div>
        )
    }
}
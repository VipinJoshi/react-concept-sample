/*
We will check about the update cycle in react when button is clicked so 
first state get updated and 1st is logged and 
then render will be called 
and then call back method log execue 
*/
import React, { Component } from "react";

export default class Test7 extends Component {
    constructor() {
        super();
        this.updateCount = this.updateCount.bind(this);
        this.state = { count:0 };
    }

    updateCount(){
        this.setState({count: this.state.count +1},()=>{
            console.log("In callback function of setState is "+ this.state.count) // 3nd
       //     this.setState({count: this.state.count +1})
        })
        console.log("After Set State  method count is: "+ this.state.count); // 1st 
    }

    render() {
console.log("Inside Rnder count is :" + this.state.count); //2nd

        return (<div>
            <button onClick={this.updateCount}>Increment</button>
        </div>
        )
    }
}
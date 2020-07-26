/*
wwhat will be the count when when increment click 10 time 
answer is 0 as it has should coumponnent update always return false so rerendring didn't happen

*/
import React, { Component } from "react";

export default class Test3 extends Component {
    constructor() {
        super();
        this.state = { count: 1 };
    }
    shouldComponentUpdate(nextProp, nextState) {
      //  return nextState.count == this.state.count;
      if(this.state.count>10)
      return false;
      return true;
    }
    incrementClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <div>count: {this.state.count}</div>
                <div><button onClick={this.incrementClick}>Increment</button> </div>
            </div>
        )
    }


}


/*

Output
handle clicked called and becoause of throttle next button click will give you output after 5 sec
// refer link https://blog.bitsrc.io/improve-your-react-app-performance-by-using-throttling-and-debouncing-101afbe9055
*/
import React, { Component } from "react";
import * as _ from "underscore";

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = _.throttle(this.handleClick, 5000);
  }
  handleClick = () => {
    console.log("handle clicked called");
  };
  handleClickThrottled = () => {
    console.log("handle Thorteled click called");
  };

  render() {
    return <button onClick={this.handleClickThrottled}>Problem2</button>;
  }
}

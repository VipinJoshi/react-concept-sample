import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import store from "./redux/store";
import Hello from './HOCUsage';
import Hello2 from './HocUsage2';
import Headers from './Header';
import Home from './Home';

import Test1 from './test-component/problem1';
import Test2 from './test-component/problem2';
import Test3 from './test-component/problem3';
import Test4 from './test-component/problem4';
import Test5 from './test-component/problem5';
import Test6 from './test-component/problem6';
import Test7 from './test-component/problem7';
import Test8 from './test-component/problem8';
import DifferenceuseRefAndCreateRef from './test-component/problem9';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <>
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
<Hello2 name="Vipin" />
      </div>
      <hr/>
      <p>React -Redux changess</p>
      <Headers />
        <br />
        <Home />
        <br />
        
<h2> Sample problems </h2>
<hr/>
         <Test1 />
        <Test2 />
        <Test3 />
        <Test4 />
        <Test5 />
        <Test6 />
        <Test7 />
        <Test8 />
        <DifferenceuseRefAndCreateRef/>
    
      </>
    );
  }
}

render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

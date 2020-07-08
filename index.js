import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import store from "./redux/store";
import Hello from './HOCUsage';
import Hello2 from './HocUsage2';
import Headers from './Header';
import Home from './Home';
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
      </>
    );
  }
}

render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

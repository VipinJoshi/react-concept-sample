import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './HOCUsage';
import Hello2 from './HocUsage2';
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
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
<Hello2 name="Vipin" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

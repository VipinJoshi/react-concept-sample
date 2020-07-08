import React from 'react';
import withSecretToLife from './hocSample1';

const DisplayAnotherWay = props => (
  
  <div>
    Your age should be less than {props.numberValue}.
     <br/>
      Your Name : {props.name}
      <br/>
      You work for: {props.newAddedClient}
  </div>

);

const WrappedComponent = withSecretToLife(DisplayAnotherWay);

export default WrappedComponent;

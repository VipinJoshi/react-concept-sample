import React from 'react';
import withHocUsage from './hocSample1';

const DisplayValue = props => (
  
  <div>
    Your Age should be greater than  {props.numberValue}.
     <br/>
      You must know <h3>{props.name}</h3>
      <br/>
      Name as in props {props.newAddedClient}
  </div>

);

const WrappedComponent = withHocUsage(DisplayValue);

export default WrappedComponent;
import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  class HOC extends React.Component {
    
    render() {
      return (
        <WrappedComponent
          {...this.props}
          numberValue={42}
          newAddedClient="Uber"
        />
      );
    }
  }
    
  return HOC;
};

export default withSecretToLife;
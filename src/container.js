import React from 'react';

class Container extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container-sm">100% wide until small breakpoint</div>
        <div className="container-md">100% wide until medium breakpoint</div>
        <div className="container-lg">100% wide until large breakpoint</div>
        <div className="container-xl">100% wide until extra large breakpoint</div>
        <div className="container-xxl">100% wide until extra extra large breakpoint</div>
      </div>
    );
  }
}

export default Container;
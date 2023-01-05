import React, { Component } from 'react'
const Hocomp = (OriginalComponent) => {
 class Newcomponent extends Component {
    constructor(props){
    super(props);
      
    this.state={
        count:0,
    };
    }
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
      render() {
        return (
          <OriginalComponent
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      );
    }
  }
  return Newcomponent;
};

export default Hocomp

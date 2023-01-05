import React, { Component } from "react";
import Hocomp from "./Hocomp";

 class ClickCounter extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
       <button onClick={this.props.handleIncrement}>Click </button>
       <h2>You Clicked {this.props.count} times !!</h2>
      </div>
    );
  }
}

export default Hocomp(ClickCounter)
import React, { Component } from "react";
import Imagecomponent from "./Imagecomponent";

import Lifecycle2 from "./Lifecycle2";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
            message:"This is from parent of the lifecycle1",
            showImage:true,
    };
    console.log("Iam from the constructor");
  }
  changemessage=()=>{
      this.setState({message:"This message is from lifecycle1"});

  };
  showHideImage=()=>{
    this.setState({showImage:!this.state.showImage})
  };
  render() {
    console.log("Iam from the render1");

    return (
    <div>
           <button onClick={this.changemessage}>GET VALUES</button>
           <Lifecycle2 msg={this.state.message}/>
           <button onClick={this.showHideImage}>Show/Hide</button>
           {this.state.showImage && <Imagecomponent/>}
               
    </div>
    )
  }
  componentDidMount() {
    console.log("componentdidmount is triggered")
  }
}

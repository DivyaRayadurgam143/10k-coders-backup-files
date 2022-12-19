import React, { Component } from 'react'

export default class Lifecycle2 extends Component {
    constructor(props){
    super(props)
        this.state={
            message:"this is from child of  the Lifecycle2"
        }
        console.log("Iam from the lifecycle2 constructor")
    }
  render() {
    console.log("Iam from the render2");

    return (
      <div>
        <h2>{this.props.msg}</h2>
      </div>
    )
  }
  shouldComponentUpdate(){
    console.log("Iam from the update component want a permission to update")
    return true
  }
  componentDidUpdate(){
    console.log("Iam from the update component")
  }
}

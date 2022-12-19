import React, { Component } from 'react'

export default class Imagecomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
      <img src="https://i.pinimg.com/originals/7a/ee/fd/7aeefd905e139454ea079f412678b547.jpg" alt="" width={200} height={300} />
      </div>
    );
  }
  componentWillUnmount(){
    console.log("component is Removed from DOM")
  }
}

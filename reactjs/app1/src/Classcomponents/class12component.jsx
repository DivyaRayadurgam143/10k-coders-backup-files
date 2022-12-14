import { Component } from "react";

class Student extends Component {
  constructor() {
    super();
    this.state = {
     
      welcome: "Hiii Welcome To All The BTS Armies",
      btsdetails: {
        fname: "bangtan",
        lname: "sonyeodon",
      },
      army: ["rm", "v", "suga", "jk"],
      ShowBts:false
    };
  }
  Showbtsinformation = () => {
    console.log("Showbtsinformation...called");
    this.setState({ShowBts:true})
  };
  render() {
    return (
      <div>
        <h2>welcome to bts</h2>
        <button onclick={this.Showbtsinformation}>Showbtsinformation</button>
        <p>{this.state.ShowBts && this.state.btsdetails.fname}</p>
        <p>{this.state.ShowBts && this.state.btsdetails.lname}</p>
      </div>
    );
  }
}
export default Student;

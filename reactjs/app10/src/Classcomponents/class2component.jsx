import { Component } from "react";

class Student extends Component {
  constructor() {
    super();
    this.state = {
     
      welcome:" Hiii Welcome To All The BTS Armies",
      employeedetails:{
        Name:"bangtan",
        Email:"bts@email"
      },
      army:["rm", "v", "suga", "jk"],
      ShowEmployee:false
    };
  }
  ShowEmployeeInformation = () => {
    console.log("ShowBtsInformation...called");
    this.setState({ShowEmployee:true})
  };
  render() {
    return (
      <div>
        <h2>welcome to bts</h2>
        <button onClick={this.ShowEmployeeInformation}>Showbtsinformation</button>
        <p>{this.state.ShowEmployee && this.state.employeedetails.Name}</p>
        <p>{this.state.ShowEmployee && this.state.employeedetails.Email}</p>
      </div>
    );
  }
}
export default Student;

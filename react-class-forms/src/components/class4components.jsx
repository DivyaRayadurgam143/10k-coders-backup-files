import { Component } from "react";

export default class Foform extends Component{
    constructor(props){
        super(props);
        this.state={
              person:{
               fistname:"",
               lastname:"",
               dateofbirth:"",
               emailid:"",
               mobilenumber:""
              },
              allUsers: [
                {
                    fistname:"Jeon",
                    lastname:"Jungkook",
                    dateofbirth:"01-9-1997",
                    emailid:"jk@gmail.com",
                    mobilenumber:"9876543212"
                },
                {
                    fistname:"kim",
                    lastname:"Taehyung",
                    dateofbirth:"30-12-1995",
                    emailid:"v@gmail.com",
                    mobilenumber:"9867531465"
                },
                {
                    fistname:"Park",
                    lastname:"Jimin",
                    dateofbirth:"13-10-1995",
                    emailid:"jimin@gmail.com",
                    mobilenumber:"9637823156"
                },
                {
                    fistname:"kim",
                    lastname:"namjoon",
                    dateofbirth:"12-9-1994",
                    emailid:"rm@gmail.com",
                    mobilenumber:"78435610963"
                },
                {
                    fistname:"Kim",
                    lastname:"Seokjin",
                    dateofbirth:"04-12-1992",
                    emailid:"jin@gmail.com",
                    mobilenumber:"9237102739"
                }
              ],
              editIndex: null,
            
        }
    };
    handleChange = (e) => {
        var newPerson = { ...this.state.person };
        newPerson[e.target.name] = e.target.value;
        this.setState({ person: newPerson });
      };
      addUser = () => {
        console.log(this.state.person);
        var newAllUsers = [...this.state.allUsers];
        newAllUsers.push(this.state.person);
        this.setState({ allUsers: newAllUsers });
        this.clearForm();
      };
      clearForm = () => {
        var newForm = {
            fistname:"",
            lastname:"",
            dateofbirth:"",
            emailid:"",
            mobilenumber:""
        };
        this.setState({ person: newForm });
      };
      editUser = (usr, i) => {
        this.setState({ person: usr, editIndex: i });
      };
      deleteUser = (usr) => {
        var latestUsers = this.state.allUsers.filter(
          (myUser) => myUser.email !== usr.email
        );
        this.setState({ allUsers: latestUsers });
      };
      updateUser = () => {
        var latestUsers = [...this.state.allUsers];
        latestUsers[this.state.editIndex] = this.state.person;
        this.setState({allUsers:latestUsers,editIndex:null});
        this.clearForm()
      };
    render(){
        return (
        <div>
            <form>
              <legend><h2>HTML FORM</h2></legend>
          <label htmlFor="">FIRST NAME:</label>
          <input  type="text"   name="firstname"  value={this.state.person.fistname}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">LAST NAME:</label>
          <input  type="text"   name="lastname"  value={this.state.person.lastname}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">DATE OF BIRTH:</label>
          <input  type="text"   name="dateofbirth"  value={this.state.person.dateofbirth}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">EMAIL ID:</label>
          <input  type="text"   name="emailid"  value={this.state.person.emailid}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">MOBILE NUMBER:</label>
          <input  type="text"   name="mobilenumber"  value={this.state.person.mobilenumber}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          {this.state.editIndex !== null ? 
          (
            <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button>
          ) : 
          (
            <button type="button" onClick={this.addUser} className="btn btn-primary"> add User </button>
          )
          }  
            </form>
            <table class="table table-hover table-primary">
            <thead>
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>DATE OF BIRTH</th>
              <th>EMAIL ID</th>
              <th>MOBILE NUMBER</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.fistname}</td>
                <td>{usr.lastname}</td>
                <td>{usr.dateofbirth}</td>
                <td>{usr.emailid}</td>
                <td>{usr.mobilenumber}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => {this.editUser(usr, i);}}> Edit </button>{" "}
                </td>
                <td>
                <button  className="btn btn-danger" onClick={() => {  this.deleteUser(usr); }}> Delete </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )
    }
}
import { Component } from "react";
import axios from 'axios'
export default class Foform extends Component{
    constructor(props){
        super(props);
        this.state={
              person:{
                id:"",
               fistname:"",
               lastname:"",
               dateofbirth:"",
               emailid:"",
               mobilenumber:"",
              },
               allUsers: [
              //   {
              //       fistname:"Jeon",
              //       lastname:"Jungkook",
              //       dateofbirth:"01-9-1997",
              //       emailid:"jk@gmail.com",
              //       mobilenumber:"9876543212"
              //   },
              //   {
              //       fistname:"kim",
              //       lastname:"Taehyung",
              //       dateofbirth:"30-12-1995",
              //       emailid:"v@gmail.com",
              //       mobilenumber:"9867531465"
              //   },
              //   {
              //       fistname:"Park",
              //       lastname:"Jimin",
              //       dateofbirth:"13-10-1995",
              //       emailid:"jimin@gmail.com",
              //       mobilenumber:"9637823156"
              //   },
              //   {
              //       fistname:"kim",
              //       lastname:"namjoon",
              //       dateofbirth:"12-9-1994",
              //       emailid:"rm@gmail.com",
              //       mobilenumber:"78435610963"
              //   },
              //   {
              //       fistname:"Kim",
              //       lastname:"Seokjin",
              //       dateofbirth:"04-12-1992",
              //       emailid:"jin@gmail.com",
              //       mobilenumber:"9237102739"
              //   }
              ],
              editIndex: null,
            
        };
    }
    handleChange = (e) => {
      var newPerson = { ...this.state.person };
      newPerson[e.target.name] = e.target.value;
      this.setState({ person: newPerson });
    };
    addUser = () => {
      axios({
        method:"post",
        url:"http://localhost:3002/allUsers3/",
        data:this.state.person,
        headers:{'content-type':'application/json'}
    
      })
      console.log(this.state.person);
      var newAllUsers = [...this.state.allUsers];
      newAllUsers.push(this.state.person);
      this.setState({ allUsers: newAllUsers });
      this.clearForm();
    };
    clearForm = () => {
      var newForm = {
        id:"",
        fistname:"",
        lastname:"",
        dateofbirth:"",
        emailid:"",
        mobilenumber:"",
      };
      this.setState({ person: newForm });
    };
  
    editUser = (usr, i) => {
      this.setState({ person: usr, editIndex: i });
    };
  
    deleteUser = (usr,id) => {
      console.log(usr,id)
      var number=id+1;
      axios.delete("http://localhost:3002/allUsers3/"+number).then((res)=> this.componentDidMount())
    
      // var latestUsers = this.state.allUsers.filter(
      //   (myUser) => myUser.emailid !== usr.emailid
      // );
      // this.setState({ allUsers: latestUsers });
    };
  
    updateUser = () => {
      var number = this.state.editIndex+1;
    axios({
      method:"put",
      url:"http://localhost:3002/allUsers3/"+number,
      data:this.state.user
    })
      var latestUsers = [...this.state.allUsers];
      latestUsers[this.state.editIndex] = this.state.person;
      this.setState({allUsers:latestUsers,editIndex:null});
      this.clearForm()
    };
    render(){
        return (
        <div>
            <form>
              <h2>HTML FORM</h2>
              <label htmlFor="">ID:</label>
          <input  type="number" placeholder="id"  name="id"  value={this.state.person.id}  onChange={(e) => {this.handleChange(e);}} disabled/>{" "}
          <br />
          <br />
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
            <table className="table table-hover table-primary">
            <thead>
            <tr>
              <th>ID</th>
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
                <td>{usr.id}</td>
                <td>{usr.fistname}</td>
                <td>{usr.lastname}</td>
                <td>{usr.dateofbirth}</td>
                <td>{usr.emailid}</td>
                <td>{usr.mobilenumber}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => {this.editUser(usr, i);}}> Edit </button>{" "}
                </td>
                <td>
                <button  className="btn btn-danger" onClick={() => {this.deleteUser(usr,i);}}> Delete </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )
    }
    async componentDidMount  () {
      let response =await axios.get("http://localhost:3002/allUsers3/")
  console.log(response)
  this.setState({ allUsers:response.data})
    }
}
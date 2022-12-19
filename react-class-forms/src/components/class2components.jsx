import { Component } from "react"
import axios from 'axios'
export default class Fform extends Component{
constructor(props){
    super(props);
    this.state={
        person:{
             id:"",
            name:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
            message:"",
        },
        allUsers:[
          // {
          //   name:"Kim Taehyung",
          //   username:"taehyung",
          //   email:"v@gmail.com",
          //   password:"9876543",
          //   confirmpassword:"98765432",
          //   message:"hii my name is v"
          // },
          // {
          //   name:"Kim namjoon",
          //   username:"rm",
          //   email:"rm@gmail.com",
          //   password:"1234567",
          //   confirmpassword:"1234567",
          //   message:"hii iam leader of the bts"
          // }
        ],
        editIndex: null,    
   }
}
handleChange = (e) => {
  var newPerson = { ...this.state.person };
  newPerson[e.target.name] = e.target.value;
  this.setState({ person: newPerson });
};
addUser = () => {
  axios({
    method:"post",
    url:"http://localhost:3002/allUsers/",
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
    name:"",
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
    message:"",
  };
  this.setState({ person: newForm });
};

editUser = (usr, i) => {
  this.setState({ person: usr, editIndex: i });
};

deleteUser = (usr,id) => {
  console.log(usr,id)
  var number=id+1;
  axios.delete("http://localhost:3002/allUsers/"+number).then((res)=> this.componentDidMount())
  // var latestUsers = this.state.allUsers.filter(
  //   (myUser) => myUser.email !== usr.email
  // );
  // this.setState({ allUsers: latestUsers });
};

updateUser = () => {
  var number = this.state.editIndex+1;
  axios({
    method:"put",
    url:"http://localhost:3002/allUsers/"+number,
    data:this.state.user
  })
  var latestUsers = [...this.state.allUsers];
  latestUsers[this.state.editIndex] = this.state.person;
  this.setState({allUsers:latestUsers,editIndex:null});
  this.clearForm()
};
render() {
    return <div>
        <form>
          <h2>BOOTSTRAP 4 FORM VALIDATION DEMO</h2>
          <label htmlFor="">ID:</label>
          <input  type="number" placeholder="id"  name="id"  value={this.state.person.id}  onChange={(e) => {this.handleChange(e);}} disabled/>{" "}
          <br />
          <br />
          <label htmlFor="">NAME:</label>
          <input type="text" name="name"value={this.state.person.name} onChange={(e) => {this.handleChange(e); }}/>{" "}
          <br />
          <br />
          <label htmlFor="">USERNAME:</label>
          <input type="text" name="username" value={this.state.person.username}onChange={(e) => {this.handleChange(e); }}/>{" "}
          <br />
          <br />
          <label htmlFor="">EMAIL: </label>
          <input type="email" name="email"value={this.state.person.email} onChange={(e) => {this.handleChange(e); }}/>{" "}
          <br />
          <br />
          <label htmlFor="">PASSWORD: </label>
          <input type="text" name="password" value={this.state.person.password}onChange={(e) => {this.handleChange(e); }}/>{" "}
          <br />
          <br />
          <label htmlFor="">CONFIRM PASSWORD: </label>
          <input type="text" name="confirmpassword"value={this.state.person.confirmpassword} onChange={(e) => {this.handleChange(e); }}/>{" "}
          <br />
          <br />
          <label htmlFor="">MESSAGE: </label>
          <textarea type="text" name="message"  cols="30" rows="10" value={this.state.person.message}onChange={(e) => {this.handleChange(e); }}/>{" "}
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
        <table className="table table-info table-hover">
  <thead>
           <tr>
            <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>CONFIRM PASWORD</th>
              <th>MESSAGE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
  </thead>
  <tbody>
  {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmpassword}</td>
                <td>{usr.message}</td>
                <td>
                  <button className="btn btn-warning" onClick={()=>{this.editUser(usr, i);}}>Edit</button>
                </td>

                <td>
                  <button className="btn btn-danger" onClick={()=>{this.deleteUser(usr,i);}}>Delete</button>{" "}
                </td>

              </tr>

            ))}
       </tbody>
    </table>
    </div>
}
async componentDidMount  () {
  let response =await axios.get("http://localhost:3002/allUsers/")
console.log(response)
this.setState({ allUsers:response.data})
}
}
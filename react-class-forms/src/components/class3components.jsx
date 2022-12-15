import { Component } from "react";

export default class Tform extends Component{
    constructor(props){
        super(props);
        this.state={
              person:{
                street:"",
                city:"",
                state:"",
                zipcode:"",
                country:""
              },
              allUsers: [
                {
                street:"Baegyang-daero",
                city:"busan",
                state:"Buk-gu",
                zipcode:"c",
                country:"South Korea"
                },
                {
                street:"Deokcheon-ro",
                city:"busan",
                state:"Buk-gu",
                zipcode:"46575",
                country:"South Korea"
                },
                {
                street:"Myeongdong Shopping Street",
                city:"seoul",
                state:"Buk-gu",
                zipcode:"76575",
                country:"South Korea"
                },
                {
                street:"Ikseondong Culture Street",
                city:"seoul",
                state:"Buk-gu",
                zipcode:"76575",
                country:"South Korea"
                },
                {
                street:"Namdaemun Market Street",
                city:"seoul",
                state:"Buk-gu",
                zipcode:"76567",
                country:"South Korea"
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
          street: "",
          city: "",
          state: "",
          zipcode:"",
          country:"",
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
              <legend><h2>ADDRESS</h2></legend>
          <label htmlFor="">STREET:</label>
          <input  type="text"   name="street"  value={this.state.person.street}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">CITY:</label>
          <input  type="text"   name="city"  value={this.state.person.city}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">STATE:</label>
          <input  type="text"   name="state"  value={this.state.person.state}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">ZIPCODE:</label>
          <input  type="text"   name="zipcode"  value={this.state.person.zipcode}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">COUNTRY:</label>
          <input  type="text"   name="country"  value={this.state.person.country}  onChange={(e) => {this.handleChange(e);}}/>{" "}
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
            <table class="table  table-hover table-success">
            <thead>
            <tr>
              <th>STREET</th>
              <th>CITY</th>
              <th>STATE</th>
              <th>zipcode</th>
              <th>COUNTRY</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.street}</td>
                <td>{usr.city}</td>
                <td>{usr.state}</td>
                <td>{usr.zipcode}</td>
                <td>{usr.country}</td>
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
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUseraction, deleteUseraction, updateUseraction } from "../actions/Useractions";
class Usersclasscomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
        password: "",
      },
    };
  }
  handlechange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  handlesubmit = () => {
    this.props.addUser(this.state.user);
    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      user: {
        fname: "",
        lname: "",
        email: "",
        password: "",
      },
    });
  };
  handleDelete = (user) => {
    this.props.deleteUser(user);
  };
  handleEdit = (user) => {
    this.setState({ user,isEdit:true });
  };
  handleUpdate = (user) =>{
      this.props.deleteUser(this.state.user);
      this.clearForm()
  }
  render() {
    const { fname, lname, email, password } = this.state.user;
    const { users } = this.props.allUsers;
    // console.log(this.props);
    return (
      <div>

        <form>
            <label htmlFor="fname" className="form-label">
              First Name :
            </label>
            <input
              type="text"
              className="form-control"
              name="fname"
              value={fname}
              onChange={(e) => {
                this.handlechange(e);
              }}
            />{" "}
            <br />
            <label htmlFor="lname" className="form-label">
              Last Name :
            </label>
            <input
              type="text"
              className="form-control"
              name="lname"
              value={lname}
              onChange={(e) => {
                this.handlechange(e);
              }}
            />{" "}
            <br />
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => {
                this.handlechange(e);
              }}
              disabled={this.state.isEdit}
            />{" "}
            <br />
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => {
                this.handlechange(e);
              }}
            />{" "}
            <br />
        {this.state.isEdit ?  <button  type="button" onClick={this.handleUpdate}> Update User</button>: <button
           type="button" onClick={this.handlesubmit}>   Add User </button> }
        </form>
    

      
        <table>

          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>

      <tbody>
        {users.map((user, i) => (
               <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td> <button type="button"
                    onClick={() => {
                      this.handleEdit(user);
                    }}
                  >
                    EDIT
                  </button></td>
                <td>
                  <button type="button"
                    onClick={() => {
                      this.handleDelete(user);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))};
      </tbody>

        </table>
      </div>
    )
  }
}

//  The mapstatetoprops is access the state and return the particular function required
function MapStateToProps(state) {
  return {
    allUsers: state.users,
  };
}
// The mapdispatchtoprops is return the one object and   return the actions to this component
function MapDispatchToProps(dispatch) {
  return {
    addUser: (user) => dispatch(addUseraction(user)),
    deleteUser: (user) => dispatch(deleteUseraction(user)),
    updateUser:(user) =>dispatch(updateUseraction(user),)
  };
}
export default connect(MapStateToProps, MapDispatchToProps)(Usersclasscomp);

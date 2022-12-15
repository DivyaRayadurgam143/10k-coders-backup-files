import { Component } from "react";

export default class Sform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        averagecpi: "",
        experience: "",
        website: "",
      },
      allUsers: [
        {
            university: "Sri Venkateswara University",
            institute: " Indian Institute of Science Education & Research (IISER)",
            branch: "Computer Science and Engineering",
            degree: "BACHELOR OF TECHNOLOGY",
            averagecpi: "89.2",
            experience: "1-2",
            website: "https://www.bing.com/search?q=google&form=ANNTH1&refig=37e5a40db306455c91196228fb3c89df",
      },
       {
        university: "Sri Venkateswara University",
        institute: "Indian Institute of Technology (IIT)",
        branch: "Electrical & Electronics Engineering",
        degree: "BACHELOR OF TECHNOLOGY",
        averagecpi: "83.5",
        experience: "0-1",
        website: "https://www.bing.com/search?q=google&form=ANNTH1&refig=37e5a40db306455c91196228fb3c89df",
      },
    {
        university: "K L University",
        institute: "National Institute of Technology (NIT) ",
        branch: "Electrical & Electronics Engineering",
        degree: "BACHELOR OF TECHNOLOGY",
        averagecpi: "92.1",
        experience: "2-3",
        website: "https://www.bing.com/search?q=google&form=ANNTH1&refig=37e5a40db306455c91196228fb3c89df",
    },
{
    university: "Acharya Nagarjuna University",
    institute: " National Institute of Ocean Technology (ESSO-NIOT)",
    branch: "Civil Engineering",
    degree: "BACHELOR OF TECHNOLOGY",
    averagecpi: "94.6",
    experience: "4-1",
    website: "https://www.bing.com/search?q=google&form=ANNTH1&refig=37e5a40db306455c91196228fb3c89df",
},
{
    university: "Sri Krishnadevaraya University",
    institute: "Indian Institute of Information Technology ",
    branch: "Biotechnology Engineering",
    degree: "BACHELOR OF SCIENCE",
    averagecpi: "72.5",
    experience: "1-2",
    website: "https://www.bing.com/search?q=google&form=ANNTH1&refig=37e5a40db306455c91196228fb3c89df",
}
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
    console.log(this.state.person);
    var newAllUsers = [...this.state.allUsers];
    newAllUsers.push(this.state.person);
    this.setState({ allUsers: newAllUsers });
    this.clearForm();
  };
  clearForm = () => {
    var newForm = {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        averagecpi: "",
        experience: "",
        website: "",
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
  render() {
    return <div>
       <form>
       <fieldset>
          <legend><h2>REGISTRATION DETAILS</h2></legend>
          <label htmlFor="">UNIVERSITY:</label>
          <input  type="text" placeholder="university"  name="university"  value={this.state.person.university}  onChange={(e) => {this.handleChange(e);}}/>{" "}
          <br />
          <br />
          <label htmlFor="">INSTITUTE:</label>
          <input   type="text" placeholder="institute" name="branch"  value={this.state.person.institute}  onChange={(e) => {this.handleChange(e); }}/>{" "}
          <br />
          <br />
          <label htmlFor="">BRANCH:</label>  
          <select name="list of courses" id="courses">
                <option value=""> -----select---</option>
                <option value="ece"> CIVIL ENGINEERING</option>
                <option value=" cse"> CSE </option>
                <option value="ece"> EEE</option>
                <option value="ce "> ECE</option>
            </select> 
          <br />
          <br />
          <label htmlFor="">DEGREE:</label>
          <select name="type of degree" id="degree">
                <option value=""> -----select---</option>
                <option value="bachelor of science"> BACHELOR OF SCIENCE</option>
                <option value="bachelor of arts">BACHELOR OF ARTS</option>
                <option value="associate degree">ASSOCIATE DEGREE</option>
                <option value="bachelor of technology ">BACHELOR OF TECHNOLOGY</option>
            </select>
            <input type="radio" name="degree" value="pursuing" />PURSUING
            <input type="radio" name="degree" value="completed"/>COMPLETED
          <br />
          <br />
          <label htmlFor="">AVERAGE CPI:</label>
          <input  type="number" name="averagecpi" value={this.state.person.averagecpi} onChange={(e) => {this.handleChange(e);}} />{" "}
          <br />
          <br />
          <label htmlFor="">EXPERIENCE:</label>
          <input type="number" name="expeience" value={this.state.person.experience}onChange={(e) => { this.handleChange(e); }}/>{" "}
          <br />
          <br />
          <label htmlFor="">WEBSITE:</label>
          <input type="url" name="website" value={this.state.person.website} onChange={(e) => {this.handleChange(e); }}/>{" "}
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
        </fieldset>
        </form>
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th>UNIVESITY</th>
              <th>INSTITUTE</th>
              <th>BRANCH</th>
              <th>DEGREE</th>
              <th>AVERAGE CPI</th>
              <th>EXPERIENCE</th>
              <th>WEBSITE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.university}</td>
                <td>{usr.institute}</td>
                <td>{usr.branch}</td>
                <td>{usr.degree}</td>
                <td>{usr.averagecpi}</td>
                <td>{usr.experience}</td>
                <td>{usr.website}</td>
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
  }
}

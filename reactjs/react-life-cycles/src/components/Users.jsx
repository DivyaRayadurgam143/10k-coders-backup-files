import React, { Component } from 'react'
import Recipie from './Recipieuser';

import axios from 'axios'

export default class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        person: {
         fname:"",
         lname:"",
         tel:"",
         address:"",
         city:"",
         state:"",
         zip:"",
        },
         recipies:[]
      };
    }
    handleChange = (e) => {
      var newperson = { ...this.state.person };
      newperson[e.target.name] = e.target.value;
      this.setState({ person: newperson })
    }
  render() {
    return (
      <div  className="container" style={{display: "flex"}}>
       {this.state.recipies.map((usr,i)=> <Recipie key={i}  {...usr} recipieDetails={usr}/> )}
      </div>
    )
  };
 async componentDidMount  () {
    // let Data = await(await fetch("http://localhost:3201/recipes")).json()
    // this.setState({recipies:Data});
    // console.log(Data)

    let response =await axios.get("http://localhost:3201/recipes")
    console.log(response)
    this.setState({recipies:response.data})
   }
  }


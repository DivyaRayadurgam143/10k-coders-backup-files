import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Personform from "./Personform";
const Create = () => {
  const [Person, setPerson] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  })
  const navigate = useNavigate();

  const handlechange = (e) => {
    let newperson = {...Person};
    Person[e.target.name] = e.target.value;
    setPerson(newperson);
  };
  const handlesubmit = () => {
    console.log(Person);
    fetch("http://localhost:3201/Users", {
      method: "POST",
      body: JSON.stringify(Person),
      headers: { "content-type": "application/json" },
    }).then(() => {
      console.log("Person added");
      clearhtmlhtmlForm()
      navigate('/');
    })
  }
  const clearhtmlhtmlForm = () => {
    setPerson({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
    })
  }
  return (
  <div className="container">
    <Personform handlechange={handlechange} Person={Person} handlesubmit={handlesubmit} btntext="create person"/>
  </div>
    

  )
}

export default Create;

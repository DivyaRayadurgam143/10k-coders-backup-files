import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Person from "./Person";

const Persons = () => {
  const [Persons, setPersons] = useState([]);
  useEffect(() => {
    getAllPersons();
  }, []);

  const getAllPersons = async () => {
    const response  = await (
      await fetch("http://localhost:3201/Users")
    ).json();
    setPersons(response)
  };

  return <div>
    <table className="table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   {Persons.map((Personprobs,i)=> <Person prsnpbs={Personprobs} key={i} /> )}
  </tbody>
</table>
  </div>;
};

export default Persons;

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Delete =() =>{
  const [Person, setPerson] = useState({})
 const navigate = useNavigate()
const params = useParams();
console.log(params)
useEffect(()=>{
fetch("http://localhost:3201/Users"+params.id).then((response)=>response.json()).then((data)=>{
  // console.log(data)
  setPerson(data)
})
},[])
 const confirmdelete =() =>{
  fetch("http://localhost:3201/Users"+params.id,{
    method:"DELETE"
  }).then(()=>{
    navigate('/')
  })
 }
  return (
    <div>
     <ul>
      <li>{params.id}</li>
      <li>{params.name}</li>
      <li>{Person.username}</li>
      <li>{Person.email}</li>
      <li>{Person.phone}</li>
      <li>{Person.website}</li>
     </ul>
     <button className="btn btn-danger" onClick={confirmdelete}>Confirm Delete</button>
    </div>
  )
}

export default Delete

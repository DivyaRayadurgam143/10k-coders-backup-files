import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Personform from './Personform'


const Edit = () => {
  const [Person,setPerson] = useState({id:"",name:"",username:"",email:"",phone:"",website:""})
const params = useParams()
const navigate =useNavigate()
  useEffect(()=>{
    fetch("http://localhost:3201/Users"+params.id).then((response)=>response.json).then((data)=>{
      setPerson(data)
    })
  })
  const handlechange = (e) => {
    let newperson = {...Person};
    Person[e.target.name] = e.target.value;
    setPerson(newperson);
  }
 const updateperson =()=>{
  fetch("http://localhost:3201/Users"+params.id,{
    method:"PUT",
    body:JSON.stringify(Person),
    headers:{"content-type":"application/json"}
  }).then(()=>{
   navigate('/')
  })
     console.log("updateperson")
 }
  return (
    <div className="container">
      <h1>Hii Welcome To Edit Page</h1>
      <Personform Person={Person} handlechange={handlechange} btntext="Update" handesubmit={updateperson}/>
    </div>
  )
}

export default Edit

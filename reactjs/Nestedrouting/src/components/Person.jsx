import React from 'react'

const Person = ({prsnpbs}) => {
    // console.log(prsnpbs)

    const handleDelete =(prsnpbs)=>{
         console.log(prsnpbs)
    }

  return (
    <tr>
    <td>{prsnpbs.id}</td>
    <td>{prsnpbs.name}</td>
    <td>{prsnpbs.username}</td>
    <td>{prsnpbs.email}</td>
    <td>{prsnpbs.phone}</td>
    <td>{prsnpbs.website}</td>
    <td><button className='btn btn-success'>EDIT</button></td>
    <td><button className='btn btn-danger' onClick={()=>{handleDelete(prsnpbs)}}>DELETE</button></td>
    </tr>
  )
}

export default Person

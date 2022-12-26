import React from 'react'

const Personform = (handlechange,Person,handlesubmit,btntext) => {
  return (
    <div>
      <form>
    <div className="mb-3">
      <label htmlFor="exampleInputId1" className="form-label">Id</label>
      <input type="number" className="form-control"  value={Person.id}
            name="id"
            onChange={(e) => {
              handlechange(e)
            }}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputName1" className="form-label">Name</label>
      <input type="text" className="form-control"  value={Person.name}
            name="name"
            onChange={(e) => {
              handlechange(e)
            }}/>
    </div>
    <div  className="mb-3" >
    <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
      <input type="text" className="form-control"  value={Person.username}
            name="username"
            onChange={(e) => {
              handlechange(e)
            }}/>
    </div>
    <div  className="mb-3" >
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" className="form-control"  value={Person.email}
            name="email"
            onChange={(e) => {
              handlechange(e)
            }}/>
    </div>
    <div  className="mb-3" >
    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
      <input type="number" className="form-control"  value={Person.phone}
            name="phone"
            onChange={(e) => {
              handlechange(e)
            }}/>
    </div> 
    <div  className="mb-3" >
    <label htmlFor="exampleInputWebsite1" className="form-label">Website</label>
      <input type="text" className="form-control"  value={Person.website}
            name="website"
            onChange={(e) => {
              handlechange(e)
            }}/>
    </div>
    
    <button type="button" className="btn btn-primary" onClick={handlesubmit} >{btntext}</button>
  </form>
    </div>
  )
}

export default Personform

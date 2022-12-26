import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand">Curd Application</Link>
      <Link className="navbar-brand"  to={'/'}>HOME</Link>
      <Link to={'Create'} className="navbar-brand">Create user</Link>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
};

export default Navbar;

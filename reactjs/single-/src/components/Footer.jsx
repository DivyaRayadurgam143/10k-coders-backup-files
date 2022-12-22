import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<div class="card text-center">
  <div class="card-header">
  COMPANY
  </div>
  <div class="card-body">
    <h5 class="card-title">TERMS AND POLICY</h5>
    <li>Policies</li>
      <li>Terms Of Use</li>
      <li>Privacy</li>
   <Link to="/" className="nav-link">Home</Link>
  </div>
</div>
  )
}

export default Footer

import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom' 
const Secondhome=()=>{
    return(
        <div className="home">
      <h1>Welcome to the Farmer's Market</h1>
      <Link to="/crops" className="link">View Crops</Link>
      <Link to="/add-crop" className="link">Add Crop</Link>
    </div>

)}
export default Secondhome
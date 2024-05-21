import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom' 
import 'C:/Users/rahulsingh594/Documents/FarmerCrop/demo-app/src/components/home.css'
const Home=()=>{
    return(
        <html>
        <head>
        <link rel="stylesheet" href="demo-app\src\components\home.css"></link>
        </head>
        <div class="container">
  <div class="jumbotron text-center">
    <h1 class="display-4">Welcome to Farmer's Crop</h1>
    <p class="lead">Buy and sell fresh crops directly from farmers</p>
    <hr class="my-4" />
    <p>Please login or sign up to access your account.</p>
    <p class="lead">
      <Link to="/Login" class="btn btn-primary btn-lg" role="button">Login</Link>
      <Link to="/signup" class="btn btn-primary btn-lg" role="button">Sign Up</Link>
    </p>
  </div>
</div></html>
    )
}
export default Home
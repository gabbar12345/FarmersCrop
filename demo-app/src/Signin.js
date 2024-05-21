import React, { useState } from 'react'
import axios from 'axios'
function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const login=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{
            email:email,
            pass:password
        })
        .then((response)=>{
            if(response.data.message){
                console.log(response.data.message)
            }else{
                console.log("Account login Successfully.")
            }
        })
        console.log(email,password)
    }

    return(
        <div class="container">
  <div class="login-form">
    <h2>Login</h2>
    <form>
      <div class="mb-3">
        <label for="login-email" class="form-label">Email</label>
        <input type="email" class="form-control" id="login-email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} required />
      </div>
      <div class="mb-3">
        <label for="login-password" class="form-label">Password</label>
        <input type="password" class="form-control" id="login-password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" required />
      </div>
      <button type="submit" class="btn btn-primary btn-block" onClick={login}>Login</button>
    </form>
  </div>
</div>
    )
}

export default Login
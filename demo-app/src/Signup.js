import React, { useState } from 'react'
import axios from 'axios'
const Signup=()=>{
    const [values,setvalues]=useState({
        username:'',
        email:'',
        password:''
    })
    const handleChange=(event)=>{
        setvalues({...values,[event.target.id]:[event.target.value]})
        console.log("hello",values)
        console.log([event.target.id],[event.target.value])
    }
    const handleSubmit=(event)=>{
        
        console.log(values)
        // console.log("values",handleChange)
        // console.log(event)
        event.preventDefault();
        axios.post('http://localhost:3001/signup',values)
        .then((response)=>{
            if(response.data.message){
                
                console.log(response.data.message)
            }else{
                // setRegistrationStatus("Account Created Successfully.");
                console.log(response)
            }
        })
        .catch(err=>console.log(err))
    }


    return (
        <div class="container">
  <h2 class="text-center">Sign Up</h2>
  <form onSubmit={handleSubmit}> 
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" class="form-control" id="username" placeholder="Enter your username" onChange={handleChange} />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter your email" onChange={handleChange}/>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter your password" onChange={handleChange}/>
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </form>
</div>
    );

}
export default Signup
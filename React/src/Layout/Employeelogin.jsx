import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Employeelogin() {
  const temp=useNavigate();
const[input,setInput]= useState({
username:'',
pass:''
});
console.log(input)

  const handlechange=(e)=>{
  setInput({...input,[e.target.name]:e.target.value})
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
     if (input.username==="joy" || input.pass==="joy"){
      temp('/employee')
    

      }
      else{
        alert("Enter valid Username and Password")
      }
  }
  
  return (
    <>
    
   <div>
  <div className="limiter">
    <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
      <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <form className="login100-form validate-form" onSubmit={handlesubmit}>
          <span className="login100-form-title p-b-49">
            Login
          </span>
          <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
            <span className="label-input100">Username</span>
            <input className="input100" type="text" name="username" placeholder="Type your username" onChange={handlechange}/>
            <span className="focus-input100" data-symbol="" />
          </div>
          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <span className="label-input100">Password</span>
            <input className="input100" type="password" name="pass" placeholder="Type your password"onChange={handlechange} />
            <span className="focus-input100" data-symbol="" />
          </div>
          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button className="login100-form-btn" >
                Login
              </button>
            </div>
          </div>
          
          
        </form>
      </div>
    </div>
  </div>
  <div id="dropDownSelect1" />
</div>
    </>
  )
}

export default Employeelogin;
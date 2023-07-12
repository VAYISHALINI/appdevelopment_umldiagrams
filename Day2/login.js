import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
function Login(){
  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  const [checkpass,setCheckPass]=useState(false);
  const navigate=useNavigate();
  
  const check=()=>{
    if(pass=="vayisha@123"){
       setCheckPass(true);
    }
  }
    return(
        <div className="logmain">  	
       
        <div className="login">
          <form onSubmit={check}>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
            <input type="password" name="pass" value={pass}onChange={(e)=>setPass(e.target.value)}placeholder="Password" required />
            <button className="logbut">Login</button>
            {(checkpass && (alert("successful login.")))}
            {(checkpass && (navigate("/home")))}
            <Link to="/" style={{textDecoration:"none"}}><h5>Don't have an account? Register</h5></Link>
          </form>
        </div>
      </div>
    );

}
export default Login;
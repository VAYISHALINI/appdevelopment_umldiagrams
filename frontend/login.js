import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword, setName } from './loginaction';
import axios from 'axios';
import './login.css';
function Login({
  email,
  password,
  
  name,
  setEmail,
  setName,
  setPassword,
  
}) {
  const check = async(e) => {
    e.preventDefault();
  
    try{
      const response=await axios.post(
        "http://localhost:8081/api/v1/auth/authenticate",
        {
          email:email,
          password:password
        }
        ).then((response)=>{
          console.log(response.data);
          localStorage.setItem('token',response.data.token);
          console.log(localStorage.getItem('token'));
        })
        
        window.alert("Sucessfully Logged In");
        
        
        
        // dispatch({type:"LOGIN",payload:user});
        navigate("/home");
      }catch(error){
        console.log(error);
        window.alert("Invalid Credentials");
      
    }
  };
  const navigate=useNavigate();
  const[checkpass,setCheckPass]=useState(false);
  return (
    <>
        
  <ul className="main-nav">
    {/* <img src={img}/> */}
    
    <li>
      <Link to="/contact">CONTACT US</Link>
    </li>
    <li>
      <Link to="/about">ABOUT US</Link>
    </li>
   

    <li className="title">MAKE MY TRIP</li>

  </ul>
    <div className="logmain">
      <div className="login">
        <form onSubmit={check}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="logbut">Login</button>
          {checkpass && alert('successful login '+name)}

          {checkpass && navigate('/home')}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h5>Don't have an account? Register</h5>
          </Link>
        </form>
      </div>
    </div>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
    name:state.name
    
  };
};

const mapDispatchToProps = {
  setEmail,
  setPassword,
  setName,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

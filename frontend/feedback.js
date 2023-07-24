
import './feedback.css';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

const Feedback = () => {
  
  
  const[pass,SetPass]=useState(false);
 const changepass=()=>{
  SetPass(true);
 }
 const navigate=useNavigate();
  return (
    <div>
      <div className="regmain">
        <div className="signup">
          <form onSubmit={changepass}>
            <label htmlFor="chk" aria-hidden="true" id="sign">
              Feedback
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
             
              required
            />
            <input
              type="email"
              name="emailid"
              placeholder="Email"
              
              required
            />
             <textarea
              type="text"
              name="feed"
              placeholder="Type you feedback"
              className='feedb'
              required
            />
          
            <button className="signbut">Submit</button>
            {pass && alert("Thankyou for your feedback")}
            {pass && navigate("/home")}
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;


import './register.css';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const Registration = () => {
  const [fields, setFields] = useState({
    username: '',
    emailid: '',
    mobileno: '',
    gender: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [pass, setPass] = useState(false);

   const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!fields.mobileno.match(/^[0-9]{10}$/)) {
      formIsValid = false;
      newErrors["mobileno"] = "*Please enter a valid mobile no.";
    }

    if (!fields.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/)) {
      formIsValid = false;
      newErrors["password"] = "*Please enter a strong password.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handlePost = (event) => {
    event.preventDefault();
    const data = {
      name: fields.username,
      email: fields.emailid,
      phoneno: fields.mobileno,
      gender: fields.gender,
      password: fields.password,
    };

    axios.post('http://localhost:8081/api/v1/auth/register', data);
    setPass(true);
    
    
   
  };

  return (
    <div>
      <div className="regmain">
        <div className="signup">
          <form onSubmit={handlePost}>
            <label htmlFor="chk" aria-hidden="true" id="sign">
              Sign up
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              value={fields.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="emailid"
              placeholder="Email"
              value={fields.emailid}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="mobileno"
              placeholder="MobileNo"
              value={fields.mobileno}
              onChange={handleChange}
              required
            />
            <div className="errorMsg">{errors.mobileno}</div>
            <select
              name="gender"
              value={fields.gender}
              onChange={handleChange}
              required
            >
              <option style={{ color: "#e0dede" }}>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              name="password"
              value={fields.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <div className="errorMsg">{errors.password}</div>
            <button className="signbut">Sign up</button>
            {pass && alert("signup")}
            {pass && navigate("/home")}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <h5>Already have an account? Click on login</h5>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

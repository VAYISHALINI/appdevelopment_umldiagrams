
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import React from "react";
import { Link } from "react-router-dom";
import image from "./images/trip3.jpg";
import './home.css';
function Home(){
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
    return(
      <>
    
  {/* <div className="header"> */}
      
  <ul className="main-nav">
    {/* <img src={img}/> */}
    <li>
    <Link to="/login" className="logout">
      LOG OUT
    </Link>
    </li>
    <li>
      <Link to="/contact">CONTACT US</Link>
    </li>
    <li>
      <Link to="/about">ABOUT US</Link>
    </li>
    <li>
      <a>PROFILE</a>
    </li>
    <li className="but">
     <button className="openbtn" onClick={openNav}>&#9776;</button>
     </li>

    <li className="title">MAKE MY TRIP</li>

  </ul>
      
{/* </div> */}

<div id="mySidepanel" className="sidepanel">
<a  className="closebtn" onClick={closeNav}>&times;</a>
<a href="#">My</a>
<a href="#">Services</a>
<a href="#">Clients</a>
<a href="#">Contact Us</a>
</div>
<h2 className='tit'>When in Doubt , Travel..</h2>
<input placeholder="FROM" type="text" className="from"/>
<input placeholder="TO" type="text" className="to"/>
{/* <input type="text" placeholder="DEPARTURE"onfocus="(this.type='date')"className="dat"/> */}
<div className='dat'>
<LocalizationProvider dateAdapter={AdapterDayjs} >
      
        <DatePicker className='datepick'  
/>
  
    </LocalizationProvider>
    </div>
<button className="search">SEARCH BUSES</button>
</>

    ); 
}
export default Home;



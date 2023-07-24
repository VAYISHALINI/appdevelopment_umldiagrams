
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import { Link ,useHistory} from "react-router-dom";
import im from './images/Screenshot (712).png'
import a1 from './images/a1.jpeg'
import b1 from './images/c1.jpeg'
import b2 from './images/c2.jpeg'
import b3 from './images/c3.jpeg'
import './home.css';
import { connect } from 'react-redux';
// import { SocialIcon } from 'react-social-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import city from './images/city.jpeg'
import { useState } from 'react';
import { setSource, setDestination } from './loginaction';
function Home({name,source,setSource,destination,setDestination}){
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  // const history = useHistory();

  
    return(
      <>
   <div className='di' >
  
      
  <ul className="main-navi">
 
    <li>
    <Link to="/login" className="logout">
      LOG OUT
    </Link>
    </li>
   
      
    <li>
      <Link to="/about">ABOUT US</Link>
    </li>
    <li className='prof'>
     
     <Link to="/profile" style={{ display:'inline-flex', alignItems: 'center',float:"right" }}><AccountCircleIcon className='pro' style={{marginTop:"-5px"}}/>{name}</Link>
    </li>
    <li className="but">
     <button className="openbtn"  onClick={openNav}>&#9776;</button>
     </li>

    <li className="title">MAKE MY TRIP</li>

  </ul>
      


<div id="mySidepanel" className="sidepanel">
<a  className="closebtn" onClick={closeNav}>&times;</a>
<a href="#">Bookings</a>
<Link to="/feedback">Feedback</Link>
<Link to="/contact">CONTACT US</Link>
 
<Link to="/help">Help</Link>
</div>
<h2 className='tit'>When in Doubt , Travel..</h2>
<input placeholder="FROM" type="text" className="from"
name="source"
value={source}
onChange={(e) => setSource(e.target.value)}/>
<input placeholder="TO" type="text" className="to" name="destination"  value={destination}
        onChange={(e) => setDestination(e.target.value)}/>

<div className='dat'>
<LocalizationProvider dateAdapter={AdapterDayjs} >
      
        <DatePicker className='datepick'  
/>
  
    </LocalizationProvider>
    </div>
<button className="search"><Link to="/search" style={{textDecoration:"none",color:"white"}}>SEARCH BUSES</Link></button>
</div >

<div className='footpage'>
<div className='offers'>
{/* <h2 style={{textAlign:"center"}}>TRENDING OFFERS</h2> */}
  <input type="radio" name="position" defaultChecked="" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
 
  <main id="carousel">
 
    <div className="item" style={{textAlign:"center"}} >
      <div>
      <img src={a1} style={{width:"100%"}}/>
      </div>
      <h4>

Save up to Rs 250 on bus tickets
Valid till 31 Jul
<br/><br/><br/>
<h4 style={{color:"#16497b"}}>USE CODE FIRST</h4>
</h4></div>
    <div className="item"  style={{textAlign:"center"}} >
    <div>
      <img src={city} style={{width:"100%"}} />
      </div>
      <h4>

      Save up to Rs 200 in Kerala and pondicherry routes.</h4>
      <br/><br/>
<h4 style={{color:"#16497b"}}>USE CODE RBTRIP</h4>
    </div>
    <div className="item"  style={{textAlign:"center"}} >
    <div>
      <img src={b1} style={{width:"100%"}} />
      </div>
      <h4>

      Save up to Rs 200 in Delhi and Rest of North.</h4>
      <br/><br/>
<h4 style={{color:"#16497b"}}>USE CODE RB200</h4>
    </div>
    <div className="item"  style={{textAlign:"center"}} >
    <div>
      <img src={b2} style={{width:"100%"}} />
      </div>
      <h4>

      Save up to Rs 300 in AP,TS routes</h4>
      <br/><br/><br/><br/>
<h4 style={{color:"#16497b"}}>USE CODE SUPERHIT</h4>
    </div>
    <div className="item"  style={{textAlign:"center"}} >
    <div>
      <img src={b3} style={{width:"100%"}}/>
      </div>
      <h4>

      Save up to Rs 200 in Gujarat and MP Routes.</h4>
      <br/>
<h4 style={{color:"#16497b"}}>USE CODE BUS200</h4>
    </div>
   
  </main>
  {/* <h2 Style={{color:"white"}}>PARTNERED WITH</h2> */}

 
</div>
{/* <div className='busop'>
  <h3 style={{textAlign:"center"}}> PRIVATE BUS OPERATORS</h3>
  <br/><br/>
  <div style={{marginLeft:"300px"}}>
    <div className='op1'><h1>A1 Travels</h1></div>
    <div className='op2'><h1>PSG Travels</h1></div>
    <div className='op3'><h1>Evacay Bus</h1></div>
    <div className='op4'><h1>Raj Express</h1></div>
  </div>
  <div style={{marginLeft:"300px"}}>
    
  <div className='op1'><h1>A1 Travels</h1></div>
    <div className='op2'><h1>PSG Travels</h1></div>
    <div className='op3'><h1>Evacay Bus</h1></div>
    <div className='op4'><h1>Raj Express</h1></div>
    </div>
  <div style={{marginLeft:"300px"}}>
  <div className='op1'><h1>A1 Travels</h1></div>
    <div className='op2'><h1>PSG Travels</h1></div>
    <div className='op3'><h1>Evacay Bus</h1></div>
    <div className='op4'><h1>Raj Express</h1></div>
  </div>
</div> */}
<div className='primo' style={{backgroundColor:"white",width:"100%"}}>
<img style={{width:"100%"}} src={im}/>
</div>
{/* <h2>PARTNERED WITH</h2>
<div>
  <div>
    <h4>SRS Travels</h4>
    <h4>Evacay Bus</h4>
    <h4>KPN Travels</h4>
    <h4>A1 Travels</h4>
  
  </div>
  <div>
    <h4>VRL Travels</h4>
    <h4></h4>
    <h4>JPT Travels</h4>
    <h4>SRM Travels</h4>
  n
  </div>
</div> */}
<div className="footer-basic">
  <footer>
    <div className="social">
      <a href="#">
      <InstagramIcon  className="icon ion-social-instagram" />
     
      </a>
      <a href="#">
        < LinkedInIcon  className="icon ion-social-snapchat" />
      </a>
      <a href="#">
        <TwitterIcon className="icon ion-social-twitter" />
      </a>
      <a href="#">
        <FacebookIcon className="icon ion-social-facebook" />
      </a>
    </div>
    <ul className="list-inline">
      <li className="list-inline-item">
        <a >Home</a>
      </li>
      <li className="list-inline-item">
        <a >Services</a>
      </li>
      <li className="list-inline-item">
        <a href="#">About</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Terms</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Privacy Policy</a>
      </li>
    </ul>
    <p className="copyright">MakeMyTrip © 2018</p>
  </footer>
</div>
</div>
</>

    ); 
}
const mapStateToProps = (state) => {
  return {
    
    name:state.name,
    source:state.source,
    destination:state.destination
    
  };
};
const mapDispatchToProps = {
  setSource,
  setDestination,
  
  
};
export default  connect(mapStateToProps, mapDispatchToProps)(Home);



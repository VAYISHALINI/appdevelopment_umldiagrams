import React from "react";
import './about.css';
import { Link } from "react-router-dom";
function About(){
    return(
        <>
        <ul className="main-nav">
   
    <li>
    <Link to="/home">
      HOME
    </Link>
    </li>
    <li>
      <a>HELP</a>
    </li>
    <li>
      <a>PROFILE</a>
    </li>
   
    <li className="title">MAKE MY TRIP</li>

  </ul>
        <div className="about">
            <h2>ABOUT US</h2>
            <p className="para">
            MakeMyTrip is India’s largest online bus ticketing platform that has 
            transformed bus travel in the country by bringing ease and convenience 
            to millions of Indians who travel using buses. Founded in 2006, MakeMyTrip 
            is part of India’s leading online travel company MakeMyTrip Limited (NASDAQ: MMYT).
            By providing widest choice, superior customer service, lowest prices and unmatched
            benefits, redBus has served over 18 million customers. redBus has a global presence 
            with operations across Indonesia, Singapore, Malaysia, Colombia and Peru apart from India.
            </p>
            <br/>
            <br/>
            <br/>
            <h2>OUR ACHIEVEMENTS</h2>
            <div>
                <div><p>GREAT MANAGER AWARDS 2022</p></div>
                <div>
                    <p>ECONOMIC TIMES
                       FUTURE RECOGNITION AWARD 20222
                    </p>
                </div>
                <div>
                    <p>
                        MOST INCLUSIVE COMPANIES INDEX
                    </p>
                </div>
                <div>
                    <p>
                        ET HUMAN CAPITAL AWARDS
                    </p>
                </div>
            </div>
        </div>
        </>
    );

    
}
export default About;

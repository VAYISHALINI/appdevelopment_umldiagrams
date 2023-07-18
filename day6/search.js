import React from "react";
import img1 from './search.css';
import { Link } from "react-router-dom";
function Search(){
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
        <div id="container">
          <div className="product-details">
            <h1>CITY TRAVELS</h1>
            <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="off">&#9734;</span>
            </span>
            <p className="information">
              Departure : 22:10<br/>
              Duration  : 04h 50m<br/>
              Arrival   : 03.00 15-JUL <br/>
              Ratings   : 4.2<br/>
              Seats Available : 28 Seats

            </p>
            <div className="control">
              <button className="btn">
              <Link to="/seat" style={{textDecoration:"none",color:"white"}}>
                <span className="buy">Book</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="product-image1">
          
          </div>
        </div>
        <div id="container">
          <div className="product-details">
            <h1>A1 TRAVELS</h1>
            
            <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9734;</span>
            <span className="off">&#9734;</span>
            </span>
            <p className="information">
              Departure : 22:10<br/>
              Duration  : 04h 50m<br/>
              Arrival   : 03.00 15-JUL <br/>
              Ratings   : 4.2<br/>
              Seats Available : 28 Seats

            </p>
            <div className="control">
              <button className="btn">
              <Link to="/seat" style={{textDecoration:"none",color:"white"}}>
                <span className="buy">Book</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="product-image2">
          </div>
        </div>
        <div id="container">
          <div className="product-details">
            <h1>PSG TOURS AND TRAVELS</h1>
           
            <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9734;</span>
            <span className="off">&#9734;</span>
          
            </span>
            <p className="information">
              Departure : 22:10<br/>
              Duration  : 04h 50m<br/>
              Arrival   : 03.00 15-JUL <br/>
              Ratings   : 4.2<br/>
              Seats Available : 28 Seats

            </p>
            <div className="control">
              <button className="btn">
               <Link to="/seat" style={{textDecoration:"none",color:"white"}}>
                <span className="buy">Book</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="product-image3">
           
          </div>
        </div>
      </>
    );
}
export default Search;
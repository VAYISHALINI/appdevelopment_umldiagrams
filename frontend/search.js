import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './search.css';
import { connect } from 'react-redux';
function Search({source,destination}) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get(`http://localhost:8081/getbus/search/${source}/${destination}`, {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setDataList(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  return (
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
   {/* <li>{source}</li> */}
   <li className="title">MAKE MY TRIP</li>

 </ul>
  
      {dataList.map((data, index) => (
        <div  id="container">
          <div className="product-details">
            <h1>{data.busName}</h1>
            <span className="hint-star star">
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9733;</span>
            <span className="on">&#9734;</span>
            <span className="off">&#9734;</span>
            </span>
            <p className="information">
              Departure: {data.departure}<br/>
              Duration: {data.duration}<br/>
              Arrival: {data.arrival}<br/>
              Ratings: {data.ratings}<br/>
              Seats Available: {data.seatsavailable} Seats<br/>
              Source :{data.source}
              Destination :{data.destination}<br/>
            </p>
            <div className="control">
              <button className="btn">
                <Link to="/seat" style={{ textDecoration: "none", color: "white" }}>
                  <span className="buy">Book</span>
                </Link>
              </button>
            </div>
          </div>
          <div className={`product-image${index + 1}`}>
            {/* Assuming you have product images for each data item */}
          </div>
        </div>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    
    source:state.source,
    destination:state.destination
    
  };
};

export default connect(mapStateToProps)(Search);

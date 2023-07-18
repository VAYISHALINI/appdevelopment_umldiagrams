import React from "react";
import './seat.css';
import { Link } from "react-router-dom";

class Seat extends React.Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          'seat1','seat2','seat3',
          'seat4','Seat5','Seat6',
          'seat7','seat8','seat9',
          'seat10','seat11','seat12',
          'seat13','seat14','seat15'

        ],
        seatAvailable: [
            'seat1','seat2','seat3',
            'seat4','Seat5','Seat6',
            'seat7','seat8','seat9',
            'seat10','seat11','seat12',
            'seat13','seat14','seat15'
            
        ],
        seatReserved: []
      }
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        })
      }
    }
    
    render() {
      return (
        <div className="sea">
          <h1>Reserve Your Seats</h1>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
}
  
  class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container">
          <h2></h2>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } />
          <button className="pay" ><Link to="/pay" style={{textDecoration:"none",color:"white"}}>Proceed to Pay</Link></button>
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return(
        <div className="right">
          <h4>Reserved Seats: ({this.props.reserved.length})</h4>
          <ul>
            { this.props.reserved.map(res => <li key={res} >{res}</li>) }
          </ul>
        </div>
      )
    }
  }
  export default Seat;
  
import React from "react";
import "./help.css";
import { Link } from "react-router-dom";
function Help(){
    return(<>
     <ul className="main-nav">
   
   <li>
   <Link to="/home">
     HOME
   </Link>
   </li>
  
  
   <li className="title">MAKE MY TRIP</li>

 </ul>
    <div className="hel">
        <h3 className="tic">Ticket Related</h3>
        <h3 className="fre">Frequently Asked Questions</h3>
        <p>I've lost my ticket. What should I do now?<br/><br/>
A copy of the ticket would have been sent to you by e-mail 
when you booked it. Please take a printout of that mail and 
produce it at the time of boarding. If you have not received the ticket e-mail, 
please call any of our call centers and our executive will re-send you a copy by mail</p>
<br/><br/>


        <p>I entered the wrong mobile number while booking. Can I get my mTicket on a different number?<br/><br/>
        Sure you can. Please contact our call center and our executive will send you the mTicket on your desired number.</p>
<br/><br/>
 <p>           
Does booking online cost me more?<br/><br/>
Not at all! The price of the bus ticket is the same as you would get from the bus operator too.
The price of hotel voucher is the same or sometimes discounted depending on the season/time.</p>

<p>
    Is it safe to use my credit card on this site?<br/><br/>
Transactions on redBus are very safe. We employ the best-in-class security and the transactions done are secure. Apart from being certified by Verisign, redBus uses Secure Socket Layers (SSL) data encryption. Using SSL ensures that the information exchanged with us is never transmitted 
unencrypted, thus protecting the information from being viewed by unauthorized individuals.
</p>

<p>
What are the advantages of purchasing a bus ticket with MakeMyTrip?<br/><br/>
redBus is India’s largest bus tickets company and therefore, you will find the largest option of bus seats on the site. Some of the advantages of dealing with us are:

-    You can choose your seat
-    You can book your bus tickets online, by phone, or in person
-    You can choose from over 1500+ bus operators
-    You can choose from buses based on boarding points, timing and bus type
</p>
</div>
    </>);
}
export default Help;
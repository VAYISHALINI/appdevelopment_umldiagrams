import {Component, React} from 'react';
import './register.css';
import { Link } from 'react-router-dom';

// const styles={
//   container:{
//    backgroundImage:'url("https://res.cloudinary.com/dctjk9ota/image/upload/v1689071083/pin4_e2h5eh.jpg")',
//    backgroundPosition:'right',
//    backgroundrepeat:'no-repeat',
//    backgroundSize: 'cover',
//   },
// };
class Registration extends Component{
  
 constructor() {
    super();
    this.state = { 
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);   
    this.RegistrationForm = this.RegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  RegistrationForm(e) {
   
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
        
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter a valid mobile no.";
      }
    }


    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

    render(){
    return(
      <div>
        <div className="regmain">  	
       
        <div className="signup">
          <form  onSubmit= {this.RegistrationForm}>
            <label htmlFor="chk" aria-hidden="true" id="sign">Sign up</label>
            <input type="text" name="username" placeholder="User name" required />
            <input type="email" name="emailid" placeholder="Email" value={this.state.fields.emailid} onChange={this.handleChange}  required />
           
            <input type="number" name="mobileno" placeholder="MobileNo"  value={this.state.fields.mobileno}onChange={this.handleChange} required />
            <div className="errorMsg">{this.state.errors.mobileno}</div>
            {/* <input type="text" name="gender" placeholder="Gender" required /> */}
            <select >
              <option style={{color:"#e0dede"}}>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
           
            <input type="password" name="password" value={this.state.fields.password}   onChange={this.handleChange} placeholder="Password" required />
            <div className="errorMsg">{this.state.errors.password}</div>
            <Link to="/home" style={{textDecoration:"none"}}><button className="signbut">Sign up</button></Link>
           <Link to="/login" style={{textDecoration:'none'}}><h5>Already have an accout?click on login</h5></Link>
          </form>
        </div>
       
      </div>
      </div>
    );
    }
}
export default Registration;
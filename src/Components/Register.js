import React, { Component } from 'react'
import './Home.css';
import { Link, Redirect} from 'react-router-dom'
class Register extends Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            mname: '',
            fname: '',
            email: '',
            number: '',
            password: '',
            repassword: '',
            
            
            touched: {

                fname: false,
                mname: false,
                lname: false,
                email: false,
                number: false,
                password: false,
                repassword: false

            }
        }
    }
    onChange = (e) => {
        var value = (e.target.type == 'checkbox') ? e.target.checked : e.target.value;
        console.log(value);
        this.setState({
            [e.target.name]: value
        })
    }

    onBlur = (e) => {
        var touched = Object.assign({}, this.state.touched);
        touched[e.target.name] = true;
        this.setState({
            touched
        })
    }
    
    onReg= (e) => {
        e.preventDefault();
        
        
    }

    isValidEmail = (email) => {
        return email.indexOf("@") != -1;
        
    }


    validate = () => {
        var Error = {};
        var isValid = false;
        
    
            if (this.state.fname == "") {
                Error.fname = "Please Enter First Name";
            }
    
            
            if (this.state.lname == "") {
                Error.lname = "Please Enter Last Name";
            }
    
            if (this.state.number == "")  {
                Error.number = "Ph Number is required";
            }
            else{
                if((this.state.number.length !== 10))
                Error.number = "In-Valid Ph Number";
            }
    
            if (this.state.email == "") {
                Error.email = "Please Enter Your Email";
            }
            else {
                if (!this.isValidEmail(this.state.email)) {
                    Error.email = "Enter Valid Email"
                }
            }
    
    
            if (this.state.password == "")  {
                Error.password = "Please Enter Password";
            }
            else{
                if(this.state.password.length < 6)
                Error.password="Password is weak"
            }
    
            if (this.state.repassword != this.state.password) {
                Error.repassword = "Please Enter Correct Password";
            }

    return {
        Error,
        isValid: Object.keys(Error).length == 0
    }
}

render() {
    var { Error, isValid } = this.validate();
    var { touched } = this.state;
    if(this.state.onReg==true){
        return(
            <Redirect to="/"></Redirect>
        )
    }

        return (
            
            <div className="container">
                <div className="login-form col-md-4 offset-md-4">
                    <h1 className="title">Register Here</h1>
                    <form>

                        <div className="form-group">
                            <label><b>FirstName</b></label>
                            <input type="text" value={this.state.fname} onChange={this.onChange} placeholder="Enter FirstName" className="form-control" name="fname" onBlur={this.onBlur}/>
                            <p>{touched.fname && Error.fname}</p>
                        </div>

                        <div className="form-group">
                            <label><b>Middle Name</b></label>
                            <input type="text" value={this.state.mname} onChange={this.onChange} placeholder="Enter MiddleName" className="form-control" name="mname" onBlur={this.onBlur} />
                            <p>{touched.mname && Error.mname}</p>
                        </div>

                        <div className="form-group">
                            <label><b> Last Name</b></label>
                            <input type="text" value={this.state.lname} onChange={this.onChange} placeholder="Enter LastName" className="form-control" name="lname" onBlur={this.onBlur}/>
                            <p>{touched.lname && Error.lname}</p>
                        </div>

                        <div className="form-group">
                            <label><b>Email</b></label>
                            <input type="text" value={this.state.email} onChange={this.onChange} placeholder="Enter Email" className="form-control" name="email" onBlur={this.onBlur}/>
                            <p>{touched.email && Error.email}</p>
                        </div>

                        <div className="form-group">
                            <label><b>Mobile Number</b></label>
                            <input type="text" value={this.state.number} onChange={this.onChange} placeholder="Enter Number" className="form-control" name="number" onBlur={this.onBlur}/>
                            <p>{touched.number && Error.number}</p>
                        </div>

                        <div className="form-group">
                            <label><b>Password</b></label>
                            <input type="password" value={this.state.password} onChange={this.onChange} placeholder="Enter Password" className="form-control" name="password" onBlur={this.onBlur}/>
                            <p>{touched.password && Error.password}</p>
                        </div>

                        <div className="form-group">
                            <label><b>Conform Password</b></label>
                            <input type="password" value={this.state.repassword} onChange={this.onChange} placeholder="Enter Conform Password" className="form-control" name="repassword" onBlur={this.onBlur}/>
                            <p>{touched.repassword && Error.repassword}</p>
                        </div><br />

                        <button onClick={this.onReg} disabled={!isValid} className="btn btn-primary btn-block"><Link to="/" id="bt3">Register</Link></button>

                    </form>
                </div>
            </div>

        )
    }
}
export default Register;
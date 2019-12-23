import React, { Component } from 'react'
import './Home.css';
import {
    Link, Redirect
} from 'react-router-dom'
class Home extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
                emailError:'',
                passwordError:''
            }
        }
    
    

    login=(e)=>{
        e.preventDefault();
        var isValid=this.validte();
        if((this.state.email=="user@gmail.com")&&(this.state.password=="123456")){
            this.setState({
                loggedIn:true
            
            })
        }
        else{
            alert("Enter valid Details")
        }
            
    }
    register=(e)=>{
        e.preventDefault();
    }
    onEmail=(e)=>{
        this.setState({
            email:e.target.value

        })
    }

    onpwd=(e)=>{
        this.setState({
            password:e.target.value

        })
        
    }
    validte=()=>{
      var emailError="";
       var passwordError="";

        if(!this.state.email.includes('@')){
            emailError="invalid Email";
        }
        if(!this.state.password){
            passwordError="invalid Password";
        }
        if(emailError || passwordError){
            this.setState({
                emailError,passwordError
            });
            return false;
        }
        return true;


    }        
    render(){
        if(this.state.loggedIn==true){
            return(
                <Redirect to="/Dashboard"></Redirect>
            )
        }
           
        return(
           <div className="container">
           <div className="login-form col-md-4 offset-md-4">
             <h1 className="title">Login Here</h1>
             <form>
               <div className="form-group">
               <label><b>Email</b></label>
               <input type="text" onChange={this.onEmail} className="form-control" placeholder="Enter Email"/>
               <div>{this.state.emailError}</div>
             </div>
             <div className="form-group">
               <label><b>Password</b></label>
               <input type="password" onChange={this.onpwd} className="form-control" placeholder="Enter Password"/>
               <div>{this.state.passwordError}</div>
               </div>
               <button onClick={this.login} className="btn btn-primary btn-block">Login</button>
               <button onClick={this.register} className="btn btn-primary btn-block"><Link to="/Register" id="bt1">Register</Link></button>
             </form>
           </div>
           </div>
           
            
        )
    }
}
export default Home;
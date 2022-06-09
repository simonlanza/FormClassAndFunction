import React from "react";
import { Component } from "react";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import '../styles/HomePage.css';


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            inView: 'home',
            userInfo: {
              name: '',
              password: '',
              email: ''
           }
        }
    }



    render() {
        console.log(this.state);
        return (
            <div className="c-container">
                <div className="button-container">
                    <button onClick={()=>this.setState({inView:'home'})}>Home</button>
                    <button onClick={()=>this.setState({inView:'sign-up'})}>Sign Up</button>
                    <button onClick={()=>this.setState({inView:'sign-in'})}>Sign In</button>
                </div>
                {this.state.inView === 'home' ? <Home /> : this.state.inView === 'sign-in' ? <SignIn userInfo={this.state.userInfo}/> : <SignUp userRegistry={({name, email, password})=> this.setState({userInfo:{name:name, password:password, email:email}})}/>}
            </div>
        );
    }
    
}

export default HomePage;
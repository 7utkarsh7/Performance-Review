import React, { useState } from "react";
import mail from "../img/mail.svg";
import {Redirect} from "react-router-dom";
import key from "../img/smart-key.svg";
import Googlelogin from "../authentication/Googlelogin";
import Titlehead from "../components/layout/Titlehead";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "../../src/redux/actions/auth";

function Login({login, isAuthenticated}) {
  const [password, setPassword] = useState("");
  const [email, setMail] = useState("");
  function onSubmit(e) {
    e.preventDefault();
  
    login(email,password);
    
    }
  function handleMail(e) {
    setMail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  if(isAuthenticated){
    return <Redirect to="/dashboard" />
  }
 
  return (
    <div className="container">
      <div className="bgtop">
        <Titlehead />
        <div className="signinform">
          <h1>Sign In</h1>
          <hr />

          <div className="inputfield">
            <p>EMAIL ADDRESS</p>
            <div className="inputbox">
              <img src={mail} alt="" />
              <h3>|</h3>
              <input
                type="email"
                placeholder="|   abc@gmail.com"
                onChange={handleMail}
                value={email}
              ></input>
            </div>
          </div>
          <div className="inputfield">
            <p>PASSWORD</p>
            <div className="inputbox">
              <img src={key} alt="" />
              <h3>|</h3>
              <input
                type="text"
                placeholder="|   Enter Your Password"
                onChange={handlePassword}
                value={password}
              ></input>
            </div>
          </div>

          <div className="passmanager">
            <input type="checkbox" />
            <label >Remember Me</label>
            <a href="/">Forgot Password?</a>
          </div>
          <div style={{ textAlign: "left" }}>
            <button className="signin-btn" onClick={onSubmit}>
              SIGN IN
            </button>
          </div>
          <p className="or">OR</p>
          <Googlelogin />
        </div>
      </div>
      <div className="bgbottom">
        <p>Copyright 2020 5PINS.All Rights Reserved.</p>
      </div>
    </div>
  );
}

Login.propTypes ={
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);

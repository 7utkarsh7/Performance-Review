import React, { useState } from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import mail from "../img/mail.svg";
import key from "../img/smart-key.svg";
import Titlehead from "../components/layout/Titlehead";
import { useHistory } from "react-router-dom";
import { register } from "../redux/actions/auth";
import PropTypes from "prop-types";

function Register({ register, isAuthenticated }) {
  let history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setMail] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    register({name,email,password});
  }
  function gotoLogin() {
    history.push("/login");
  }
  function handleName(e) {
    setName(e.target.value);
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
          <h1>Register</h1>
          <hr />
          <div className="inputfield">
            <p>NAME</p>
            <div className="inputbox">
              <img src={mail} alt="" />

              <input
                placeholder="|  Your Name"
                onChange={handleName}
                value={name}
                type="text"
              />
            </div>
          </div>
          <div className="inputfield">
            <p>EMAIL ADDRESS</p>
            <div className="inputbox">
              <img src={mail} alt="" />

              <input
                placeholder="|  abc@gmail.com"
                onChange={handleMail}
                value={email}
                type="text"
              />
            </div>
          </div>
          <div className="inputfield">
            <p>PASSWORD</p>
            <div className="inputbox">
              <img src={key} alt="" style={{marginRight: "5px"}} />

              <input
                type="password"
                placeholder="|  Create Your Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <button className="signin-btn" onClick={onSubmit}>
              REGISTER
            </button>
          </div>

          <div style={{ textAlign: "left" }}>
            <button
              className="signin-btn"
              style={{
                color: "#6b6b6b",
                backgroundColor: "white",
                boxShadow: "0px 3px 6px #00000029"
              }}
              onClick={gotoLogin}
            >
              LOGIN INSTEAD
            </button>
          </div>
        </div>
      </div>
      <div className="bgbottom">
        <p>Copyright 2020 5PINS.All Rights Reserved.</p>
      </div>
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register);

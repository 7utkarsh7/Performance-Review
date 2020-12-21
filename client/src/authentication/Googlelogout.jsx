import React from "react";
import { GoogleLogout } from "react-google-login";
import {logout} from "../redux/actions/auth";
import {useDispatch} from "react-redux";


  function Googlelogout() {

   const dispatch = useDispatch();

  function logoutSuccess(event) {
    dispatch(logout());
  }
  
  return (
    <GoogleLogout
      clientId="420831940970-u16rvfgoss3ejhbk9bkmjq9bmcp2uo8v.apps.googleusercontent.com"
      render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
    )}
      onLogoutSuccess={logoutSuccess}
      onFailure={logout}
      style={{height:"20px", color:"black"}}
    ></GoogleLogout>
  );
}
export default Googlelogout;

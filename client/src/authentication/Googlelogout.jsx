import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

function Googlelogout() {
  let history = useHistory();

  function logout(event) {
    history.push("/login");
  }
  return (
    <GoogleLogout
      clientId="420831940970-u16rvfgoss3ejhbk9bkmjq9bmcp2uo8v.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
      onFailure={logout}
    ></GoogleLogout>
  );
}
export default Googlelogout;

import React from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { refreshTokenSetup } from "./Refreshtoken";

function Googlelogin() {
  let history = useHistory();
  function responseGoogleSuccess(response) {
    console.log("login success, user:", response);
      const {name, email, imageUrl}= response.profileObj;
      console.log(name,email, imageUrl);
    history.push("/dashboard");
    refreshTokenSetup(response);
  }
  function responseGoogleFailure(response) {
    // alert("error");
    console.log(response);
  }
  return (
    <GoogleLogin
      clientId="420831940970-u16rvfgoss3ejhbk9bkmjq9bmcp2uo8v.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
      cookiePolicy={"single_host_origin"}
      className="google-login"
      isSignedIn={true}
    />
  );
}
export default Googlelogin;

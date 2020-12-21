import React from "react";
import GoogleLogin from "react-google-login";
import { refreshTokenSetup } from "./Refreshtoken";
import {glogin} from "../redux/actions/auth"; 
import {useDispatch} from "react-redux";
function Googlelogin() {

  const dispatch = useDispatch();


  function responseGoogleSuccess(response) {
    const tokenID = response.tokenId;
      dispatch(glogin(tokenID));
    refreshTokenSetup(response);
  }

  function responseGoogleFailure(response) {
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

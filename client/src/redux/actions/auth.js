import axios from "axios";
import setAuthToken from "../../utilities/setAuthToken"
import { loadNote } from "./todo";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
   GLOGIN_FAIL,
   GLOGIN_SUCCESS
} from "./types";

//load User
export const loadUser = () => async (dispatch) => {
   
  if(localStorage.token){
      setAuthToken(localStorage.token);
  }
try {
  const res = await axios.get("/api/auth");

  dispatch({
    type: USER_LOADED,
    payload: res.data
  });
  dispatch(loadNote());
} catch (error) {
    console.log(error);
  dispatch({
    type: AUTH_ERROR
  });
}
};

//register user
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);
   console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
    alert(err);//mine
  }
};

//login user
export const login = (email, password ) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);
 console.log("login res", res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
    alert(err);//mine
  }
};




//google login
export const glogin = tokenID => async (dispatch) => {

const body = {tokenId: tokenID};
  try {
    const res = await axios.post("/api/gauth", body);
   console.log(res,"final res");
    dispatch({
      type: GLOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: GLOGIN_FAIL
    });
    console.log("error at actions", err);
  }


}




// LOGOUT clear profile

export const logout= ()=> dispatch =>{
  dispatch({type: LOGOUT});
}
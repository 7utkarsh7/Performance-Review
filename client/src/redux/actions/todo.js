import axios from "axios";
import {
    NOTE_ADDED,
    DELETE_NOTE,
    NOTE_LOADED,
    NOTELOAD_ERROR,
    ADDING_NOTE_FAIL,
    DELETING_NOTE_FAIL} from "./types";
    
     

import setAuthToken from "../../utilities/setAuthToken";

export const loadNote = () => async (dispatch) => {
   
  if(localStorage.token){
      setAuthToken(localStorage.token);
  }
try {
  const res = await axios.get("/api/notes");
   console.log(res, res.data, "here data");
  dispatch({
    type: NOTE_LOADED,
    payload: res.data
  });
} catch (error) {
  dispatch({
    type: NOTELOAD_ERROR
  });
}
};






////add note
export const addNote = note  => async (dispatch) =>{

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(note);
    console.log("note add past");

    try {
      const res = await axios.post("/api/notes", body, config);

      console.log(res.data[0], "addition here");
      dispatch({
        type: NOTE_ADDED,
        payload: res.data
      });
   dispatch(loadNote());
    } catch (error) {
     dispatch ({
       type: ADDING_NOTE_FAIL
     });
    
    }
    };
 


  ///delete note 

  export const deleteNote = index =>async dispatch => {
      console.log("deleted", index);

try {
  const res = await axios.delete(`/api/notes/${index}`);
console.log(res.data);
  dispatch({
    type: DELETE_NOTE,
    payload: res.data
  });
  dispatch(loadNote());
} catch (error) {
  dispatch({
    type: DELETING_NOTE_FAIL,
    payload: error
  })
}

    
  };
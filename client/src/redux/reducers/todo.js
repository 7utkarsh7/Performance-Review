/* eslint-disable import/no-anonymous-default-export */
import {
    NOTE_ADDED,
    ADDING_NOTE_FAIL,
    NOTE_LOADED,
     NOTELOAD_ERROR ,
     DELETE_NOTE
} from "../actions/types";

const initialState = {
    notes:[],
    loading: true,
    error: {}
  };

  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case NOTE_LOADED:
        return {
          ...state,
          notes: payload,
          loading: false
        };
      case NOTE_ADDED:
        return {
          ...state,
          notes: [...state.notes, payload],
          loading: false
        };
      case DELETE_NOTE:
        return {
          ...state,
          notes: state.notes.filter((note, index) => index !== payload),
          loading: false
        };
    case NOTELOAD_ERROR:
    case ADDING_NOTE_FAIL:
        return {
            ...state,
            error: payload,
            loading: false,
        }
      
      default:
        return state;
    }
  }
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteNote } from "../../redux/actions/todo";
import {useDispatch} from "react-redux";
function Note(props) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteNote(props.id));
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon  />
      </button>
    </div>
  );
}

export default Note;

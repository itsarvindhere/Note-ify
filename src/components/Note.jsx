import React from "react";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={handleClick}>
        <DeleteRoundedIcon />
      </button>
      <button onClick={handleClick}>
        <EditRoundedIcon />
      </button>
    </div>
  );
}

export default Note;

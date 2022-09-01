import React from "react";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);

    console.log(props.id);
    console.log(props.key);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <RemoveCircleOutlineOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;

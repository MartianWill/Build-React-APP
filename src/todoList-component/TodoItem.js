import React, { useState } from "react";

export default function TodoItem(props) {
  // const [isClicked,setClick] = useState(false);
  // function handleClick() {
  //    setClick((prev) => {
  //      return !prev
  //    });

  // }

  return (
    <div onClick={() => props.onClick(props.id)}>
      <li>{props.text}</li>
    </div>
  );
}

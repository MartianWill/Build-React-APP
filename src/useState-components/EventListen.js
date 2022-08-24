//add event listener such as on-click, mouse-over

import React from "react";

function EventListen() {
  const [headText, setHeadText] = React.useState("hello");
  const [mouseOver, setMouseOver] = React.useState(false);

  function handleClick() {
    setHeadText("submitted");
    setTimeout(() => {
      setHeadText("hello");
    }, 1000);
  }

  return (
    <div className="container">
      <h1>{headText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={() => setMouseOver(false)}
        onMouseOver={() => setMouseOver(true)}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default EventListen;

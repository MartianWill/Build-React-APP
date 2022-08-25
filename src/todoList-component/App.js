import React, { useState } from "react";

function App(props) {
  const [item, setItem] = useState("");
  const itemArray = props.Array;

  function handleInput(event) {
    const { value } = event.target;
    setItem(value);
  }

  const List = (item) => {
    console.log("item");
    return <li>{item}</li>;
  };

  function handleBtn() {
    itemArray.push(item);
    console.log("item pushed", itemArray);
    // setItem("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} name="newItem" value={item} />
        <button type="button" onClick={handleBtn}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{itemArray.map(List)}</ul>
      </div>
    </div>
  );
}

export default App;

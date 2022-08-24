import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [head, setHead] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHead(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {head}</h1>
      <form action="" onSubmit={handleClick}>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

import React from "react";

export default function State() {
  const [count, setCount] = React.useState(12);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import StateFunc from "./StateFunc";
import StateClass from "./StateClass";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<StateFunc />);

// //StateFunc
// setInterval(
//   () =>
//     root.render(
//       <React.StrictMode>
//         <StateFunc />
//       </React.StrictMode>
//     ),
//   1000
// );

//StateClass
root.render(
  <React.StrictMode>
    <StateClass />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
// import Contact from "./contact-components/Contact";
// import EmojipediaApp from "./emoji-components/EmojipediaApp";
// import LoginRender from "./components/LoginRender";
import State from "./useState-components/State";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <LoginRender />
//   </React.StrictMode>
// );

// // contact app
// root.render(
//   <React.StrictMode>
//     <Contact />
//   </React.StrictMode>
// );

// //emojipedia
// root.render(
//   <React.StrictMode>
//     <EmojipediaApp />
//   </React.StrictMode>
// );

//state
root.render(
  <React.StrictMode>
    <State />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
